import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
  "Full-Stack Engineer",
  "React Developer",
  "Node.js Backend Dev",
  "Freelance Builder",
  "Open to Work",
];

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function useScramble(target, duration = 800) {
  const [display, setDisplay] = useState(target);
  const frameRef = useRef(null);

  useEffect(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    const start = performance.now();
    const maxLen = target.length;

    function frame(now) {
      const t = Math.min((now - start) / duration, 1);
      let result = "";

      for (let i = 0; i < maxLen; i++) {
        if (t > i / maxLen + 0.3) {
          result += target[i] || "";
        } else if (t > i / maxLen) {
          result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        } else {
          result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }

      setDisplay(result);

      if (t < 1) {
        frameRef.current = requestAnimationFrame(frame);
      } else {
        setDisplay(target);
      }
    }

    frameRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration]);

  return display;
}

export default function MorphingText({
  words = ROLES,
  interval = 3000,
  duration = 800,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const display = useScramble(words[index], duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <div
      className={`font-mono text-sm text-zinc-500 tracking-wide ${className}`}
      aria-label={words[index]}
    >
      {display}
    </div>
  );
}