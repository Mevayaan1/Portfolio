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
      className="flex flex-col justify-center min-h-[85vh] w-full bg-transparent px-6 lg:px-12 pt-24 scroll-mt-24"
    >
      <div className="w-full max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 max-w-2xl"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="w-fit">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-primary text-xs text-emerald-400">
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
            className="uppercase tracking-wide text-xs md:text-sm text-neutral-500/70 font-primary"
          >
            Full-Stack Engineer
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-primary text-[clamp(2rem,3vw+1rem,2.8rem)] font-bold text-foreground leading-tight"
          >
            Build production-ready web applications that scale.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-primary text-sm md:text-base text-neutral-400 leading-relaxed"
          >
            I engineer scalable web systems using React, Node, and MongoDB — built
            with performance-first architecture and production-ready deployment in mind.
          </motion.p>

          {/* Stack */}
          <motion.p
            variants={itemVariants}
            className="font-primary text-sm text-neutral-500/70"
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