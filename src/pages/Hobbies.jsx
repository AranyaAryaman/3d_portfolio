import { hobbies } from "../constants";

const Hobbies = () => {
  return (
    <section className="max-container">
      <p className="eyebrow">
        <span className="h-px w-8 bg-gold" />
        Beyond the desk
      </p>
      <h1 className="head-text max-w-3xl">
        What I do for <span className="italic text-gold">joy</span>.
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory-dim">
        The things that keep me balanced when I'm not building systems.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {hobbies.map((h) => (
          <div key={h.name} className="card group h-full">
            <span className="font-display text-4xl text-gold transition-transform duration-300 group-hover:scale-110">
              {h.icon}
            </span>
            <h3 className="mt-5 text-xl font-medium text-ivory">{h.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ivory-dim">
              {h.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
