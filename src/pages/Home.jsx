import { Link } from "react-router-dom";

import SocialIcon from "../components/SocialIcon";
import HeroModel from "../models/HeroModel";
import { useTypewriter } from "../hooks/useTypewriter";
import { socialLinks } from "../constants";

const roles = [
  "Quantitative Researcher",
  "AI Software Engineer",
  "Startup Co-Founder",
  "Systems Builder",
];

const Home = () => {
  const typed = useTypewriter(roles);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        {/* Left: intro */}
        <div>
          <p className="eyebrow">
            <span className="h-px w-8 bg-gold" />
            Aranya Aryaman
          </p>

          <h1 className="head-text max-w-xl">
            I build <span className="italic text-gold">intelligent</span> systems
            for markets and machines.
          </h1>

          <p className="mono mt-6 text-base text-ivory-dim sm:text-lg">
            <span className="text-gold">&gt;</span> {typed}
            <span className="caret" />
          </p>

          <p className="mt-8 max-w-lg leading-relaxed text-ivory-dim">
            Quantitative Researcher at Quanta Ventures and co-founder of{" "}
            <span className="text-ivory">Hush</span>. Previously an engineer at
            Oracle.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/projects" className="btn">
              View my work
            </Link>
            <Link to="/about" className="btn-ghost">
              About me
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.link}
                target={s.link.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ivory-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: interactive 3D model */}
        <div className="relative h-[340px] w-full sm:h-[440px] lg:h-[560px]">
          <HeroModel />
          <p className="pointer-events-none absolute bottom-2 right-2 mono text-[10px] uppercase tracking-[0.25em] text-muted">
            drag to explore ⟲
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
