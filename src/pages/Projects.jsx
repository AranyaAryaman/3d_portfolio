import { Link } from "react-router-dom";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="max-container">
      <p className="eyebrow">
        <span className="h-px w-8 bg-gold" />
        Selected Work
      </p>
      <h1 className="head-text max-w-3xl">
        Things I've <span className="italic text-gold">built</span>.
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory-dim">
        Work across quantitative research, applied machine learning, systems,
        and full-stack products.
      </p>

      <div className="mt-16 flex flex-col">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="group grid gap-4 border-t border-hairline py-10 sm:grid-cols-[3rem_1fr] sm:gap-8"
          >
            <span className="index-num text-sm text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="subhead-text transition-colors group-hover:text-gold">
                  {project.name}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-gold"
                  >
                    {project.linkLabel || "Visit"} ↗
                  </a>
                )}
              </div>

              <p className="mt-3 max-w-2xl leading-relaxed text-ivory-dim">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-wide text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start gap-6 border-t border-hairline pt-16 sm:flex-row sm:items-center sm:justify-between">
        <p className="subhead-text max-w-md">
          Have something in mind? Let's talk.
        </p>
        <Link to="/contact" className="btn">
          Get in touch
        </Link>
      </div>
    </section>
  );
};

export default Projects;
