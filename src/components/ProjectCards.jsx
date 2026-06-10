import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Github, Lock, ArrowUpRight } from "lucide-react";

const STATUS_STYLES = {
  "In Progress": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Completed": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Experiment": "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export default function ProjectCards({
  icon,
  title,
  subtitle,
  description,
  tags,
  date,
  status,
  githubUrl,
  demoUrl,
  index,
  fanned,
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 18, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-80, 80], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-80, 80], [-6, 6]), springConfig);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const frame = useRef(null);

  const handleMouseMove = (e) => {
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
      frame.current = null;
    });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { scale: 1.01 }}
      initial={{ rotate: fanned ? (index - 1.5) * 5 : 0 }}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        perspective: 1000,
      }}
      className={`w-full flex flex-col gap-4 py-4 ${fanned && index > 0 ? "-ml-[20vw] sm:-ml-[120px] md:-ml-[180px]" : ""
        }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top row: icon + title/subtitle + date */}
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-base text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 flex-shrink-0">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{title}</h3>
              {status && (
                <span
                  className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono border ${STATUS_STYLES[status] ?? ""}`}
                >
                  {status === "In Progress" && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
                    </span>
                  )}
                  {status}
                </span>
              )}
            </div>
            <p className="text-sm text-zinc-500">{subtitle}</p>
          </div>
        </div>
        <span className="text-xs tabular-nums text-zinc-400 flex-shrink-0">{date}</span>
      </div>

      {/* Description with border-l */}
      <div className="border-l border-zinc-200 pl-4 dark:border-zinc-700">
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>

      {/* Tags + links row */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
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

        <div className="flex items-center gap-3 flex-shrink-0">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-200 transition-colors font-mono"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-zinc-700 font-mono select-none cursor-default">
              <Lock className="w-3 h-3" />
              Private
            </span>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-100 transition-colors font-mono"
            >
              Live
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}