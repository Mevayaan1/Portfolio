import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-stretch justify-center min-h-[80vh] w-full bg-transparent px-6 lg:px-12 pt-24 scroll-mt-24">
      {/* Main content row */}
      <div className="grid grid-cols-12 items-start justify-start gap-6 w-full max-w-7xl">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 4 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 }
            }
          }}
          initial="hidden"
          animate="visible"
          className="col-span-12 md:col-span-7 flex flex-col gap-6"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="uppercase tracking-wide text-xs md:text-sm text-neutral-500/70 font-primary"
          >
            Full-Stack Engineer
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="font-primary text-[clamp(2rem,3vw+1rem,2.5rem)] font-bold text-foreground leading-tight"
          >
            Build production-ready web applications that scale.
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="text-neutral-300 max-w-xl font-primary text-sm md:text-base mt-1.5"
          >
            I engineer scalable web systems using React, Node, and MongoDB — built with performance-first architecture and production-ready deployment in mind.
          </motion.p>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="text-sm md:text-base text-neutral-400 font-primary"
          >
            React • Node • MongoDB • Tailwind • REST APIs
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="flex gap-2"
          >
            <Button asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </motion.div>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="text-xs md:text-sm text-neutral-500/70 font-primary"
          >
            4+ Production Projects • MERN Stack • Performance-focused
          </motion.p>
        </motion.div>
        {/* Right: structured system visual */}
        <div className="hidden md:block col-span-12 md:col-span-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative h-[260px] md:h-[300px] rounded-xl border border-white/10 bg-transparent"
          >
            <div
              className="absolute inset-0 opacity-5"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative grid grid-cols-3 grid-rows-2 gap-3 p-3">
              <div className="rounded-md border border-white/15"></div>
              <div className="rounded-md border border-white/15"></div>
              <div className="rounded-md border border-white/15"></div>
              <div className="rounded-md border border-white/15"></div>
              <div className="rounded-md border border-white/15"></div>
              <div className="rounded-md border border-white/15"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
