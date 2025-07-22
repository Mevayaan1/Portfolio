import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

export default function HeroAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Always provide valid strings
  const title = "About Me";
  const paragraph1 =
    "I'm Ayaan, a passionate frontend developer who loves crafting beautiful, responsive, and engaging web experiences. With a strong foundation in React, Tailwind CSS, and modern animation libraries like Framer Motion, I transform ideas into performant, elegant interfaces.";

  return (
    <section id="about" ref={ref} className="relative w-full py-20 bg-transparent text-white flex flex-col items-center justify-center px-6 md:px-12">
      <div className="max-w-4xl text-center">
        <TextGenerateEffect
          words={title || "About"}
          className="text-2xl md:text-2xl font-bold mb-6 text-emerald-600"
        />
        <TextGenerateEffect
          words={paragraph1 || "No description available."}
          className="text-2xl md:text-2xl leading-relaxed text-gray-300 dark:text-black font-primary"
        />
      </div>
    </section>
  );
}



