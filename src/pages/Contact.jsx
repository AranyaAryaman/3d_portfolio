import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Fox from "../models/Fox";
import Loader from "../components/Loader";
import SocialIcon from "../components/SocialIcon";

const channels = [
  {
    label: "Email",
    icon: "email",
    value: "aryamanaranya@gmail.com",
    href: "mailto:aryamanaranya@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    value: "linkedin.com/in/aranya289",
    href: "https://www.linkedin.com/in/aranya289",
  },
  {
    label: "GitHub",
    icon: "github",
    value: "github.com/AranyaAryaman",
    href: "https://github.com/AranyaAryaman",
  },
  {
    label: "Phone",
    icon: null,
    value: "+1 (929) 888 5565",
    href: "tel:+19298885565",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentAnimation("hit");
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    setTimeout(() => {
      window.location.href = `mailto:aryamanaranya@gmail.com?subject=${subject}&body=${body}`;
      setCurrentAnimation("idle");
    }, 900);
  };

  return (
    <section className="max-container">
      <p className="eyebrow">
        <span className="h-px w-8 bg-gold" />
        Contact
      </p>
      <h1 className="head-text max-w-3xl">
        Let's start a <span className="italic text-gold">conversation</span>.
      </h1>

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
        {/* Left: form + channels */}
        <div className="flex flex-col gap-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <label className="text-sm tracking-wide text-muted">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your name"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-sm tracking-wide text-muted">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="you@example.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-sm tracking-wide text-muted">
              Message
              <textarea
                name="message"
                rows={4}
                className="textarea"
                placeholder="A few words about what you have in mind…"
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button type="submit" className="btn self-start">
              Send message
            </button>
          </form>

          <div className="grid gap-3 border-t border-hairline pt-8 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-hairline p-3 transition-colors hover:border-gold/50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-ivory-dim transition-colors group-hover:text-gold">
                  {c.icon ? (
                    <SocialIcon name={c.icon} size={16} />
                  ) : (
                    <span className="text-xs">☎</span>
                  )}
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted">
                    {c.label}
                  </span>
                  <span className="block truncate text-sm text-ivory transition-colors group-hover:text-gold">
                    {c.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: 3D fox */}
        <div className="order-first h-[320px] w-full sm:h-[420px] lg:order-last lg:h-[560px]">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
          >
            <Suspense fallback={<Loader />}>
              <directionalLight position={[0, 0, 1]} intensity={2.5} />
              <ambientLight intensity={1} />
              <pointLight position={[5, 10, 0]} intensity={2} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={2}
              />
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;
