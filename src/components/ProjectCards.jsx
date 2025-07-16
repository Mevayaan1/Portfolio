import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { cn } from "@/lib/utils" // Assuming cn utility is available for conditional class names

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
  constraintsRef,
  fanned
}) {
  // 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-15, 15]), springConfig);
  const glareOpacity = useSpring(useTransform(mouseX, [-100, 0, 100], [0.2, 0, 0.2]), springConfig);

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
      key={id}
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.2}
      whileDrag={{ scale: 1.07, rotate: 5, boxShadow: "0 16px 48px 0 rgba(0,0,0,0.45)" }}
      whileHover={{ scale: 1.04, boxShadow: "0 12px 40px 0 rgba(0,0,0,0.35)" }}
      initial={{ rotate: (index - 1.5) * 7 }}
      style={{
        zIndex: id * 10,
        rotateX,
        rotateY,
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        perspective: 1000,
      }}
      className={cn(
        // Responsive width: full on mobile, max-w-xs on mobile, sm:max-w-sm, md:max-w-md
        "relative max-w-2 sm:max-w-xs md:max-w-sm lg:max-w-md cursor-grab rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-3 sm:p-4 md:p-6 shadow-2xl overflow-hidden min-h-0 max-h-[90vh]",
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
      <div className="flex items-center justify-between">
        <span className="rounded-md bg-hue-6/20 px-2 py-1 text-xs font-medium text-hue-6">
          {status}
        </span>
        <span className="text-xs text-neutral-400">{date}</span>
      </div>
      {/* Glare overlay */}
      <motion.div
        style={{ opacity: glareOpacity }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent rounded-2xl"
      />
    </motion.div>
  )
}