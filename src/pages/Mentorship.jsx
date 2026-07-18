import { mentorship } from "../constants";

const Mentorship = () => {
  return (
    <section className="max-container">
      <p className="eyebrow">
        <span className="h-px w-8 bg-gold" />
        Mentorship &amp; Community
      </p>
      <h1 className="head-text max-w-3xl">
        Teaching, mentoring, and{" "}
        <span className="italic text-gold">giving back</span>.
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory-dim">
        Roles where I've taught, mentored, and represented communities, from
        the classroom to campus.
      </p>

      <div className="mt-16 flex flex-col">
        {mentorship.map((item) => (
          <article
            key={item.role}
            className="group grid gap-3 border-t border-hairline py-10 sm:grid-cols-[8rem_1fr] sm:gap-8"
          >
            <span className="index-num text-sm text-gold">{item.date}</span>
            <div>
              <h3 className="subhead-text transition-colors group-hover:text-gold">
                {item.role}
              </h3>
              <p className="mt-1 text-sm tracking-wide text-muted">
                {item.org}
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-ivory-dim">
                {item.detail}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Mentorship;
