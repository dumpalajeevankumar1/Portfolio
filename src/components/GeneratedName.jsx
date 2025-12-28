import { useEffect, useState } from "react";

export default function GeneratedName({
  text,
  speed = 80,
  onDone,
  isSubtitle = false,
}) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= text.length) {
      onDone && onDone();
      return;
    }

    const t = setTimeout(() => {
      setVisibleCount((v) => v + 1);
    }, speed);

    return () => clearTimeout(t);
  }, [visibleCount, text, speed, onDone]);

  return (
    <div className={isSubtitle ? "generated-subtitle" : "generated-name"}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`gen-letter ${i < visibleCount ? "show" : ""}`}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
