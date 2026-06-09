import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center min-h-[85vh] w-full bg-transparent pt-24 scroll-mt-24"
    >
      <div className="w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 max-w-2xl"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="w-fit">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new opportunities
            </span>
          </motion.div>

          {/* Role label */}
          <motion.p
            variants={itemVariants}
            className="uppercase tracking-widest text-sm font-medium text-zinc-500"
          >
            Full-Stack Engineer
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight"
          >
            Build production-ready web applications that scale.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            I engineer scalable web systems using React, Node, and MongoDB — built
            with performance-first architecture and production-ready deployment in mind.
          </motion.p>

          {/* Stack */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-zinc-600 dark:text-zinc-400"
          >
            React • Node • MongoDB • Tailwind • REST APIs
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex gap-3">
            <Button asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            variants={itemVariants}
            className="flex items-center gap-8 pt-6 mt-2 border-t border-white/10"
          >
            {[
              { value: "4+", label: "Projects Shipped" },
              { value: "1+", label: "Years Exp." },
              { value: "10+", label: "Technologies" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="font-primary font-bold text-xl text-foreground">{stat.value}</span>
                <span className="font-primary text-xs text-neutral-500/70 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}