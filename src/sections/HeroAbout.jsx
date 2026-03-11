import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: "4+", label: "Projects Shipped" },
  { number: "1+", label: "Years Experience" },
  { number: "10+", label: "Technologies" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="w-full bg-transparent px-6 lg:px-12 py-24 scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="border-t border-white/10 mb-12" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-12 gap-6"
        >
          {/* Left: label + stats */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-10 md:border-r border-white/10 md:pr-10">
            <motion.p
              variants={itemVariants}
              className="uppercase tracking-wide text-xs md:text-sm text-neutral-500/70 font-primary"
            >
              About Me
            </motion.p>

            <div className="flex flex-row md:flex-col gap-8">
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={itemVariants}>
                  <p className="font-primary text-4xl font-bold text-foreground leading-none mb-1">
                    {stat.number}
                  </p>
                  <p className="font-primary text-xs text-neutral-500/70 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: prose */}
          <div className="col-span-12 md:col-span-8 flex flex-col gap-5 md:pl-8 pt-0 md:pt-7">
            <motion.h2
              variants={itemVariants}
              className="font-primary text-[clamp(1.4rem,2vw+0.8rem,2rem)] font-bold text-foreground leading-tight"
            >
              I build things for the web — fast, scalable, and production-ready.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-primary text-sm md:text-base text-neutral-400 leading-relaxed"
            >
              I'm Ayaan — a full-stack engineer working across the MERN stack.
              I care about performance-first architecture, clean code, and shipping
              software that actually works in production, not just on localhost.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-primary text-sm md:text-base text-neutral-400 leading-relaxed"
            >
              My approach is straightforward: understand the problem deeply, build
              the simplest thing that solves it well, then iterate. I'm drawn to
              projects where engineering decisions actually matter — where scale,
              reliability, and developer experience are treated as first-class concerns.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-primary text-xs md:text-sm text-neutral-500/70"
            >
              React • Node • MongoDB • Tailwind • REST APIs
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}