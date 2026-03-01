import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function ProjectCards({
  id,
  icon,
  title,
  subtitle,
  description,
  tags,
  status,
  date,
  image,
  index,
  fanned,
  githubUrl,
  demoUrl
}) {
  // 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 18, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-80, 80], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-80, 80], [-6, 6]), springConfig);
  const glareOpacity = useSpring(useTransform(mouseX, [-80, 0, 80], [0.08, 0, 0.08]), springConfig);

  const frame = useRef(null);
  const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
      key={id}
      whileHover={reduceMotion ? undefined : { scale: 1.03, boxShadow: "0 12px 40px 0 rgba(0,0,0,0.35)" }}
      initial={{ rotate: fanned ? (index - 1.5) * 5 : 0 }}
      style={{
        zIndex: id * 10,
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        perspective: 1000,
      }}
      className={cn(
        "relative w-full h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 md:p-6 shadow-2xl overflow-hidden",
        fanned && index > 0 && "-ml-[20vw] sm:-ml-[120px] md:-ml-[180px]",
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Status dot */}
      <span
        className={cn(
          "absolute top-3 right-3 h-3 w-3 rounded-full",
          status === "Completed" ? "bg-green-400" :
          status === "In Progress" ? "bg-yellow-400" :
          "bg-gray-400"
        )}
      />
      <img
        src={image || "/placeholder.svg"}
        alt={`Image for ${title}`}
        className="mb-3 w-full h-32 sm:h-36 md:h-40 lg:h-44 rounded-xl object-cover pointer-events-none shadow-lg border border-white/10 max-h-40 sm:max-h-36 md:max-h-40 lg:max-h-44"
      />
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-hue-2-transparent text-2xl">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="mb-1 text-base font-bold text-white line-clamp-1">{title}</h3>
          <p className="text-xs text-neutral-400 line-clamp-1">{subtitle}</p>
        </div>
      </div>
      <p className="mb-3 text-xs sm:text-sm leading-relaxed text-neutral-400 line-clamp-3">{description}</p>
      <div className="mb-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-hue-4/20 px-3 py-1 text-xs font-semibold text-hue-4 tracking-wide">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between">
        <span className="rounded-md bg-hue-6/20 px-2 py-1 text-xs font-medium text-hue-6">
          {status}
        </span>
        <span className="text-xs text-neutral-400">{date}</span>
      </div>
      <div className="flex gap-2">
        <Button asChild variant="outline" size="sm" aria-label={`View ${title} on GitHub`}>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        </Button>
        <Button asChild variant="default" size="sm" aria-label={`Open live demo: ${title}`}>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </Button>
      </div>
      <motion.div
        style={{ opacity: glareOpacity }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-2xl"
      />
    </motion.div>
  )
}
