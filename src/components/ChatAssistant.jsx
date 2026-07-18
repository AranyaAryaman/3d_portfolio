import { useEffect, useRef, useState } from "react";

// Lightweight, offline "agentic" assistant. It answers questions about Aranya
// from a curated knowledge base, no API key required. Swap `answerFor` for a
// real LLM call (with a backend proxy) to make it fully generative.
const KB = [
  {
    keys: ["who is", "what does aranya do", "what do you do", "yourself", "summary", "overview", "introduce"],
    a: "Aranya Aryaman is an AI Software Engineer, Quantitative Researcher, and startup co-founder based in New York. He builds systematic research engines, ML pipelines, and production AI, currently at Quanta Ventures, a quantitative fund.",
  },
  {
    keys: ["quanta", "ventures", "current role", "research engine", "signal"],
    a: "At Quanta Ventures (a quantitative fund), Aranya architected a systematic signal-research engine evaluating 6,500+ signals with walk-forward validation and clustering, built an autonomous LLM research agent, and migrated production to a low-latency AWS stack.",
  },
  {
    keys: ["hush", "startup", "founder", "co-founder", "company", "founded"],
    a: "Aranya co-founded Hush, an AI startup, and drove the MVP from concept to production (Python, React, AWS), scaling to a $3M post-money valuation with a top-2% Y Combinator founder profile while leading a team of 4 engineers.",
  },
  {
    keys: ["oracle", "previous", "before", "earlier"],
    a: "Before his current work, Aranya was a Software Engineer at Oracle (Hyderabad), where he built low-latency PL/SQL APIs (7× faster), high-throughput Java microservices, and tuned distributed Spring Boot + Elasticsearch services.",
  },
  {
    keys: ["experience", "career", "job", "history", "worked"],
    a: "Aranya's path: Quantitative Researcher at Quanta Ventures (2026) → Co-Founder & Founding Engineer at Hush (2025) → Software Engineer at Oracle (2021-2024). See the Work section for details.",
  },
  {
    keys: ["project", "built", "portfolio", "made"],
    a: "Highlighted projects include a Systematic Signal Research Engine, LLM Supervised Fine-Tuning, a Code Vulnerability Detector, Multimodal Fake-News Detection, and a Real-Time Messenger. The Work page has the full list with links.",
  },
  {
    keys: ["skill", "tech", "stack", "language", "tools", "know"],
    a: "Core stack: Python, C++, Go, Java, TypeScript/React, SQL. Plus AWS (ECS Fargate, Lambda, RDS), Docker, Redis, LLM agents, LangChain, and RAG/embeddings. Strong in ML, distributed systems, and quantitative methods.",
  },
  {
    keys: ["education", "study", "degree", "nyu", "iit", "college", "university", "gpa"],
    a: "Aranya is completing an MS in Computer Science at NYU (4.0 GPA), after a B.Tech in Computer Science from IIT Guwahati.",
  },
  {
    keys: ["achievement", "award", "honor", "gre", "yc", "kvpy", "olympiad"],
    a: "Highlights: invited to shadow-run a $52M quant fund, NYU Distinguished Academic Achievement, top-2% YC founder, a perfect GRE Quant (170/170), and KVPY (AIR 176). See the Achievements page.",
  },
  {
    keys: ["mentor", "teaching", "ta", "assistant", "community", "secretary", "coding club"],
    a: "Aranya has been a Graduate Teaching Assistant at NYU (OS & Algorithms), Development Head of IIT Guwahati's Coding Club, and General Secretary of Hostel Siang. See the Mentorship page.",
  },
  {
    keys: ["hobby", "hobbies", "music", "sing", "swim", "football", "fun", "free time"],
    a: "Outside work, Aranya sings Hindi music (classical and film), swims to reset, and plays football competitively, including the Oracle EMEA tournament in Manchester. The Hobbies page has more.",
  },
  {
    keys: ["contact", "email", "reach", "hire", "connect", "linkedin", "github"],
    a: "You can reach Aranya at aryamanaranya@gmail.com, on LinkedIn (in/aranya289), or GitHub (AranyaAryaman). The Contact page has a quick form too.",
  },
];

const SUGGESTIONS = [
  "What does Aranya do?",
  "Tell me about Quanta Ventures",
  "What are his projects?",
  "How can I contact him?",
];

// Conversational small talk handled before keyword lookup.
const SMALLTALK = [
  {
    // easter egg: "what is Arya-man?"
    test: /arya[-\s]man|meaning of arya|what does arya\w*\s*mean|\b(what|who)\s+is\s+arya\b/,
    a: "Arya-man = Arya's man 💛. Because he's completely in love with a wonderful girl named Arya.",
  },
  {
    test: /\b(hi|hii+|hey+|hello|yo|hiya|namaste|sup|greetings|howdy)\b/,
    a: "Hey there! I'm Aranya's assistant. Ask me about his work at Quanta Ventures, his startup Hush, his projects, skills, education, or how to reach him.",
  },
  {
    test: /\b(thanks|thank you|thankyou|thx|ty|appreciate)\b/,
    a: "Anytime! Anything else you'd like to know about Aranya?",
  },
  {
    test: /\b(bye|goodbye|see you|see ya|cya|later)\b/,
    a: "Thanks for stopping by! You can reach Aranya anytime at aryamanaranya@gmail.com.",
  },
  {
    test: /how are you|how's it going|how are u|how r u/,
    a: "Doing great, thanks for asking! What would you like to know about Aranya?",
  },
  {
    test: /\b(who are you|what are you|your name)\b/,
    a: "I'm a lightweight assistant that answers questions about Aranya, his work, projects, skills, achievements, and more. Ask away!",
  },
  {
    test: /\b(help|options|what can|what do you)\b/,
    a: "I can tell you about Aranya's work (Quanta Ventures, Hush, Oracle), his projects, skills, education, achievements, mentorship, hobbies, or how to get in touch. Try a suggestion below the chat, or just ask.",
  },
];

const answerFor = (text) => {
  const q = text.toLowerCase().trim();

  for (const s of SMALLTALK) {
    if (s.test.test(q)) return s.a;
  }

  let best = null;
  let bestScore = 0;
  for (const item of KB) {
    // Weight by matched-keyword length so specific terms beat generic ones.
    const score = item.keys.reduce(
      (s, k) => (q.includes(k) ? s + k.length : s),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }
  if (best) return best.a;
  return "I'm not sure about that one, but I can tell you about Aranya's work, projects, skills, education, achievements, mentorship, hobbies, or contact details. Try a suggestion below, or rephrase your question.";
};

const ChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! I'm Aranya's assistant. Ask me anything about his work, projects, or background.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  const send = (text) => {
    const q = (text ?? input).trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: answerFor(q) }]);
      setTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open assistant"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-gold/50 bg-ink-800/90 px-4 py-3 text-sm font-medium text-gold shadow-card backdrop-blur transition-all hover:bg-gold hover:text-ink"
      >
        <span className="text-base leading-none">✦</span>
        {open ? "Close" : "Ask about Aranya"}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 flex h-[30rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-hairline bg-ink-800/95 shadow-card backdrop-blur">
          <div className="border-b border-hairline px-5 py-4">
            <p className="font-display text-lg text-ivory">Ask about Aranya</p>
            <p className="mt-0.5 text-xs text-muted">
              A lightweight assistant that answers from his profile.
            </p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-gold text-ink"
                      : "border border-hairline bg-ink-700 text-ivory-dim"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl border border-hairline bg-ink-700 px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted" />
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* persistent quick questions */}
          <div className="flex gap-2 overflow-x-auto border-t border-hairline px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => send(s)}
                className="whitespace-nowrap rounded-full border border-hairline px-3 py-1.5 text-xs text-ivory-dim transition-colors hover:border-gold hover:text-gold"
              >
                {s}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 border-t border-hairline px-4 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="flex-1 bg-transparent text-sm text-ivory placeholder:text-muted focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full border border-gold/60 px-4 py-1.5 text-xs font-medium text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
