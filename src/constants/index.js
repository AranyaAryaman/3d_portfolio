export const experiences = [
  {
    title: "AI Software Engineer & Quantitative Researcher",
    company_name: "Quanta Ventures",
    company_note: "$52M AUM Quantitative Fund",
    location: "Gulfport, FL",
    date: "2026",
    points: [
      "Architected a systematic equities signal-research engine evaluating 6,500+ signals with walk-forward validation, K-Means clustering, and correlation-constrained selection across live daily strategies.",
      "Built an autonomous LLM-powered research agent (Gemini API) with vectorized evaluation and 80+ robustness metrics, scaling automated research to 65,000+ systematically backtested candidates.",
      "Designed custom MCP research tools for Claude Code (Python, boto3, psycopg2), enabling team-wide strategy reproduction, A/B testing, and live debugging across AWS.",
      "Migrated production to a low-latency AWS stack (ECS Fargate, RDS read replica, ElastiCache Redis) with zero-downtime CI/CD across 30+ releases.",
    ],
  },
  {
    title: "Co-Founder & Founding Engineer",
    company_name: "Hush",
    company_note: "AI Startup",
    location: "New York, NY",
    date: "2025",
    points: [
      "Co-founded an AI startup and drove the MVP from concept to production (Python, React, AWS) while leading a team of 4 engineers.",
      "Built an ML pipeline to extract predictive indicators of candidate/role fit using S-BERT embeddings, LangChain, and LLM agents, improving match accuracy over keyword search.",
      "Owned vendor strategy — evaluating and integrating multiple LLM providers, sharply cutting profile-creation time.",
      "Deployed a microservices AWS architecture (EC2 + Nginx, Amplify, Supabase) scaling to 10K+ concurrent requests.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Oracle",
    company_note: "Oracle India Private Limited",
    location: "Hyderabad, India",
    date: "2021 — 2024",
    points: [
      "Engineered a low-latency PL/SQL REST API achieving a 7× performance gain via CTE optimizations, query-plan analysis, and indexing, cutting p95 from 14s to 2s.",
      "Designed a high-throughput Java & PL/SQL microservice on Linux for bulk updates, improving workflow efficiency 10× and serving 500+ internal users.",
      "Tuned a distributed Spring Boot + Elasticsearch service for deal-win prediction with load balancing and network-aware query routing.",
    ],
  },
];

export const projects = [
  {
    name: "Systematic Signal Research Engine",
    description:
      "A systematic equities research engine evaluating 6,500+ signals with walk-forward validation, K-Means clustering, and correlation-constrained selection across live daily strategies at a quantitative fund.",
    tags: ["Python", "Quant", "AWS", "Backtesting"],
    link: "",
  },
  {
    name: "LLM Supervised Fine-Tuning",
    description:
      "Supervised fine-tuning (SFT) of a large language model on a curated instruction dataset — building the data pipeline, training loop, and evaluation harness to improve task-specific performance over the base model.",
    tags: ["LLM", "Fine-Tuning", "PyTorch", "ML"],
    link: "",
  },
  {
    name: "Multimodal Fake News Detection",
    description:
      "A multimodal classifier that detects misinformation by jointly modeling article text and imagery — combining NLP embeddings with visual features to outperform unimodal text-only baselines.",
    tags: ["Deep Learning", "NLP", "Multimodal", "ML"],
    link: "",
  },
  {
    name: "Causal Inference: Weather & Traffic",
    description:
      "An observational causal-inference study estimating the effect of weather conditions on traffic patterns — applying causal methods to separate genuine causal impact from confounded correlation.",
    tags: ["Causal Inference", "Statistics", "Python"],
    link: "",
  },
  {
    name: "Code Vulnerability Detector",
    description:
      "An AI security scanning tool using Bandit and LLaMA 3.2B on AWS Lambda to analyze GitHub repositories, generating CVE-tagged reports with LLM-powered remediation across 30+ vulnerability classes.",
    tags: ["LLM", "Security", "AWS Lambda", "Python"],
    link: "https://github.com/CS-GY-9223-Cloud-Vuln-Detector/reportGeneration",
    linkLabel: "GitHub",
  },
  {
    name: "strace for xv6",
    description:
      "A Linux-like system-call tracing utility implemented in C for the xv6 kernel — supporting 22+ syscalls with filtering, circular logging, and child-process tracing.",
    tags: ["C", "Operating Systems", "Kernel"],
    link: "https://github.com/AranyaAryaman/strace-xv6",
    linkLabel: "GitHub",
  },
  {
    name: "Real-Time Messenger",
    description:
      "A real-time chat application built with Node.js, Next.js, WebSockets, and MongoDB — bi-directional messaging with sub-100ms delivery latency and JWT-based authentication.",
    tags: ["Next.js", "WebSockets", "MongoDB", "Node.js"],
    link: "https://webchat-j21z.onrender.com",
    linkLabel: "Live demo",
  },
  {
    name: "Earnings Event Study",
    description:
      "A sector-neutral event study in C++ (Beat/Meet/Miss) with 2% outlier filtering and bootstrap resampling — computing abnormal returns and CAAR over 2N-day windows to measure post-earnings drift.",
    tags: ["C++", "Quant Research", "Statistics"],
    link: "",
  },
];

export const stack = [
  "Python",
  "C++",
  "Go",
  "Java",
  "TypeScript",
  "React",
  "SQL",
  "FastAPI",
  "AWS",
  "Docker",
  "Redis",
  "LLM Agents",
  "LangChain",
  "RAG / Embeddings",
  "Distributed Systems",
];

export const achievements = [
  {
    year: "2026",
    title: "Invited to shadow-run a $52M quantitative fund",
    note: "Quanta Ventures — recognition of research and engineering judgment.",
  },
  {
    year: "2025",
    title: "Distinguished Academic Achievement, NYU",
    note: "Recognized for academic excellence (4.0 GPA).",
  },
  {
    year: "2024",
    title: "Top 2% Founder Profile, Y Combinator",
    note: "Co-founder of an AI startup valued at $3M post-money.",
  },
  {
    year: "2024",
    title: "Perfect GRE Quantitative Score — 170 / 170",
    note: "",
  },
  {
    year: "2023",
    title: "Semi-finalist — Oracle EMEA Football Tournament",
    note: "Company-wide football tournament held in Manchester, UK.",
  },
  {
    year: "2020",
    title: "Development Module Winner — Inter IIT Tech Meet",
    note: "",
  },
  {
    year: "2017",
    title: "All India Rank 570 — IIT JEE Advanced",
    note: "Top 0.1% nationally · National Top 1%, Physics Olympiad (India).",
  },
  {
    year: "2016",
    title: "KVPY Scholarship — All India Rank 176",
    note: "National research-aptitude fellowship, Dept. of Science & Technology, India.",
  },
];

export const mentorship = [
  {
    role: "Graduate Teaching Assistant",
    org: "New York University",
    date: "2025",
    detail:
      "Operating Systems & Algorithms — mentored graduate students, ran office hours, and graded coursework for two core CS classes.",
  },
  {
    role: "Development Head, Coding Club",
    org: "IIT Guwahati",
    date: "2019 – 2020",
    detail:
      "Led the club's development wing — organized workshops and mentored members building software projects.",
  },
  {
    role: "General Secretary, Hostel Siang",
    org: "IIT Guwahati",
    date: "2019 – 2020",
    detail:
      "Elected to lead the hostel's student body — represented residents, organized events, and managed hostel affairs and budgets.",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aranya289",
    label: "linkedin.com/in/aranya289",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AranyaAryaman",
    label: "github.com/AranyaAryaman",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:aryamanaranya@gmail.com",
    label: "aryamanaranya@gmail.com",
  },
];
