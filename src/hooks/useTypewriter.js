import { useEffect, useState } from "react";

// Cycles through phrases with a type/erase effect for the hero role line.
export const useTypewriter = (
  phrases,
  { typeSpeed = 70, eraseSpeed = 35, pause = 1600 } = {}
) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const full = phrases[index % phrases.length];

    if (!erasing && text === full) {
      const t = setTimeout(() => setErasing(true), pause);
      return () => clearTimeout(t);
    }
    if (erasing && text === "") {
      setErasing(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          erasing
            ? full.slice(0, prev.length - 1)
            : full.slice(0, prev.length + 1)
        );
      },
      erasing ? eraseSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [text, erasing, index, phrases, typeSpeed, eraseSpeed, pause]);

  return text;
};
