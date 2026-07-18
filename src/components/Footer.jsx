import { socialLinks } from "../constants";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 py-10 sm:px-8">
      <div className="hairline" />
      <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
        <p className="text-xs tracking-wide text-muted">
          © {new Date().getFullYear()} Aranya Aryaman
        </p>
        <div className="flex gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.link}
              target={s.link.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={s.name}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <SocialIcon name={s.icon} size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
