import ProjectCards from "@/components/ProjectCards";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PickedProjects } from "@/data/pickedprojects";

function FeatureProjects({ arrange = "grid" }) {
  const [projects, setProjects] = useState(PickedProjects);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);
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
    <div className="flex flex-col gap-5">
      {visibleProjects.map((proj, i) => (
        <motion.div
          key={proj.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: i * 0.08,
          }}
        >
          <ProjectCards
            {...proj}
            index={i}
            fanned={false}
          />
        </motion.div>
      ))}
    </div>
  ) : (
    <div className="flex flex-col gap-5">
      {visibleProjects.map((proj, i) => (
        <ProjectCards
          key={proj.id}
          {...proj}
          index={i}
          fanned={false}
        />
      ))}
    </div>
  );
  return (
    <section
      id="projects"
      ref={ref}
      className="w-full bg-transparent scroll-mt-24"
    >
      <div className="w-full">
        <div className="border-t border-zinc-200 dark:border-zinc-800 mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          {/* Left: label + heading */}
          <div className="flex flex-col gap-3">
            <p className="uppercase tracking-widest text-sm font-medium text-zinc-500">
              Selected Work
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
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

        {projects.length > 3 && (
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="mt-4 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {showAll ? "Show less" : "Show more"}
            <span aria-hidden="true">{showAll ? "−" : "+"}</span>
          </button>
        )}

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
            className="text-sm text-zinc-500 border border-zinc-200 rounded-lg px-6 py-3 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100 transition-all duration-200 flex items-center gap-2"
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
