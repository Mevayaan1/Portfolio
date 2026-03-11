import ProjectCards from "@/components/ProjectCards";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PickedProjects } from "@/data/pickedprojects";

function FeatureProjects({ arrange = "grid" }) {
  const [projects, setProjects] = useState(PickedProjects);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  function shuffleProjects() {
    setProjects((proj) => [...proj].sort(() => Math.random() - 0.5));
  }
  function reverseProjects() {
    setProjects((proj) => [...proj].reverse());
  }

  const cardContainer =
    arrange === "grid" ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((proj, i) => (
          <ProjectCards key={proj.id} {...proj} index={i} fanned={false} />
        ))}
      </div>
    ) : (
      <div className="flex justify-center items-center">
        {projects.map((proj, i) => (
          <ProjectCards key={proj.id} {...proj} index={i} fanned={true} />
        ))}
      </div>
    );

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full bg-transparent px-6 lg:px-12 py-24 scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="border-t border-white/10 mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          {/* Left: label + heading */}
          <div className="flex flex-col gap-3">
            <p className="uppercase tracking-wide text-xs text-neutral-500/70 font-primary">
              Selected Work
            </p>
            <h2 className="font-primary text-[clamp(1.6rem,2.5vw+0.8rem,2.2rem)] font-bold text-foreground leading-tight">
              Featured Projects.
            </h2>
          </div>

          {/* Right: controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={reverseProjects}
              className="font-primary text-xs text-neutral-500 border border-white/10 rounded-lg px-4 py-2 hover:border-white/25 hover:text-neutral-300 transition-all duration-200"
            >
              Reverse
            </button>
            <button
              onClick={shuffleProjects}
              className="font-primary text-xs text-neutral-500 border border-white/10 rounded-lg px-4 py-2 hover:border-white/25 hover:text-neutral-300 transition-all duration-200"
            >
              Shuffle
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {cardContainer}
        </motion.div>

        {/* GitHub archive link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="font-primary text-sm text-neutral-500 border border-white/10 rounded-lg px-6 py-3 hover:border-white/25 hover:text-neutral-300 transition-all duration-200 flex items-center gap-2 group"
          >
            View all on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default FeatureProjects;
