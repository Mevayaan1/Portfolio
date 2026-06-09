import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function ProjectCards({
  icon,
  title,
  subtitle,
  description,
  tags,
  date,
  index,
  fanned,
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 18, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-80, 80], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-80, 80], [-6, 6]), springConfig);
  const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const frame = useRef(null);

  const handleMouseMove = (e) => {
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
      frame.current = null;
    });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      initial={{ rotate: fanned ? (index - 1.5) * 5 : 0 }}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        perspective: 1000,
      }}
      className={
        `w-full flex flex-col gap-4 py-4 ${fanned && index > 0 ? "-ml-[20vw] sm:-ml-[120px] md:-ml-[180px]" : ""}`
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-base text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{title}</h3>
            <p className="text-sm text-zinc-500">{subtitle}</p>
          </div>
        </div>
        <span className="text-xs tabular-nums text-zinc-400">{date}</span>
      </div>

      <div className="border-l border-zinc-200 pl-4 dark:border-zinc-700">
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
