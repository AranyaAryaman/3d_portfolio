import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Work" },
  { to: "/achievements", label: "Achievements" },
  { to: "/mentorship", label: "Mentorship" },
  { to: "/contact", label: "Contact" },
];

const navClass = ({ isActive }) =>
  `nav-link text-sm tracking-wide transition-colors ${
    isActive ? "is-active text-ivory" : "text-muted hover:text-ivory"
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="font-display text-lg tracking-tight text-ivory transition-colors hover:text-gold"
        >
          Aranya<span className="text-gold">.</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden gap-8 sm:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-px w-6 bg-ivory transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ivory transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="mx-4 mb-3 flex flex-col gap-1 rounded-2xl border border-hairline bg-ink-800/95 p-4 backdrop-blur sm:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm tracking-wide transition-colors ${
                  isActive
                    ? "bg-ink-600 text-gold"
                    : "text-ivory-dim hover:text-ivory"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
