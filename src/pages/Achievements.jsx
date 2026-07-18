import { achievements } from "../constants";

const Achievements = () => {
  return (
    <section className="max-container">
      <p className="eyebrow">
        <span className="h-px w-8 bg-gold" />
        Achievements
      </p>
      <h1 className="head-text max-w-3xl">
        Milestones worth <span className="italic text-gold">marking</span>.
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory-dim">
        A selection of recognitions, honors, and leadership roles across
        research, entrepreneurship, and academics.
      </p>

      <div className="mt-16 flex flex-col">
        {achievements.map((item, index) => (
          <article
            key={index}
            className="group grid gap-2 border-t border-hairline py-8 sm:grid-cols-[6rem_1fr] sm:gap-8"
          >
            <span className="index-num text-sm text-gold">{item.year}</span>
            <div>
              <h3 className="text-lg font-medium text-ivory transition-colors group-hover:text-gold sm:text-xl">
                {item.title}
              </h3>
              {item.note && (
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.note}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
