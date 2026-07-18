import { experiences, stack } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <p className="eyebrow">
        <span className="h-px w-8 bg-gold" />
        About
      </p>
      <h1 className="head-text max-w-3xl">
        Engineering at the intersection of{" "}
        <span className="italic text-gold">research and production</span>.
      </h1>

      <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-ivory-dim">
        <p>
          I'm an AI Software Engineer and Quantitative Researcher based in New
          York, completing an MS in Computer Science at NYU after a B.Tech at IIT
          Guwahati. My work spans machine learning, systematic investing, and
          the systems that carry them into production.
        </p>
        <p>
          I've architected a systematic signal-research engine at a quantitative
          fund, co-founded an AI startup, and shipped low-latency distributed
          systems at Oracle, always drawn to turning research into durable,
          production-grade software.
        </p>
      </div>

      {/* Stack */}
      <div className="mt-20">
        <p className="eyebrow">
          <span className="h-px w-8 bg-gold" />
          Toolkit
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {stack.map((item) => (
            <span
              key={item}
              className="text-sm tracking-wide text-ivory-dim transition-colors hover:text-gold"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-20">
        <p className="eyebrow">
          <span className="h-px w-8 bg-gold" />
          Experience
        </p>

        <div className="flex flex-col">
          {experiences.map((exp) => (
            <article
              key={exp.company_name}
              className="grid gap-6 border-t border-hairline py-10 sm:grid-cols-[8rem_1fr]"
            >
              <div className="text-sm text-muted">
                <p className="text-ivory">{exp.date}</p>
                <p className="mt-1">{exp.location}</p>
              </div>

              <div>
                <h3 className="subhead-text">{exp.title}</h3>
                <p className="mt-1 text-sm tracking-wide text-gold">
                  {exp.company_name}
                  {exp.company_note && (
                    <span className="text-muted"> · {exp.company_note}</span>
                  )}
                </p>
                <ul className="mt-5 space-y-3">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[15px] leading-relaxed text-ivory-dim"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
