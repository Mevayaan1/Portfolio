import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
   const observer = new MutationObserver(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
   });
   observer.observe(document.documentElement, { attributes: true });
   return () => observer.disconnect();
  }, []);



  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-0"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, 
        background: {
          color: { value: isDark ? "#000000" : "#ffffff" }
        },
        particles: {
          number: { value: reduceMotion ? 8 : 24 },
          color: { value: isDark ? "#ffffff" : "#000000" },
          shape: { type: "circle" },
          opacity: { value: 0.32 },
          size: { value: { min: 1, max: 2 } },
          move: { enable: !reduceMotion, speed: reduceMotion ? 0 : 0.2 }
        },
        interactivity: {
          events: { onHover: { enable: !reduceMotion, mode: "bubble" } },
          resize: true
        },
        detectRetina: true
      }}
    />
  );
}
