import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Tailwind CSS",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="40" height="40" fill="currentColor" className="text-sky-400">
        <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"/>
      </svg>
    ),
  },
  {
    name: "React.js",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="40" height="40" fill="currentColor" className="text-cyan-400">
        <g>
          <circle cx="64" cy="64" r="11" fill="#fff"/>
          <g stroke="#06b6d4" strokeWidth="6" fill="none">
            <ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(0 64 64)"/>
            <ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(60 64 64)"/>
            <ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(120 64 64)"/>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" fill="currentColor" className="text-fuchsia-400">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#fff"/>
        <path d="M14 14h12v4H18v4h8v4H14z" fill="#a21caf"/>
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-transparent flex flex-col items-center justify-center px-4 md:px-8"
    >
      <h2 className="text-3xl font-bold text-emerald-400 mb-10 font-glora">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-2xl">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.04, boxShadow: "0 12px 40px 0 rgba(0,0,0,0.35)" }}
            className="relative flex  gap-4 items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-2 shadow-2xl overflow-hidden transition-transform duration-200"
            
          >
            <div className="mb-1">{skill.icon}</div>
            <span className="text-base text-white font-semibold font-glora">
              {skill.name}
            </span>
            {/* Glare overlay */}
            <motion.div
              style={{ opacity: 0.12 }}
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent rounded-2xl"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
