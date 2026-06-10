import ProjectCards from "@/components/ProjectCards";
import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { PickedProjects } from "@/data/Pickedprojects";
const ALL_TAGS = ["All", ...Array.from(new Set(PickedProjects.flatMap((p) => p.tags)))];

export default function FeatureProjects({ arrange = "grid" }) {
  const [activeTag, setActiveTag] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? PickedProjects
        : PickedProjects.filter((p) => p.tags.includes(activeTag)),
    [activeTag]
  );

  const visible = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section id="projects" ref={ref} className="w-full bg-transparent scroll-mt-24">
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

          {/* Right: tag filter */}
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => { setActiveTag(tag); setShowAll(false); }}
                className={`font-primary text-xs border rounded-lg px-4 py-2 transition-all duration-200 ${
                  activeTag === tag
                    ? "border-white/25 text-zinc-100 bg-white/5"
                    : "border-white/10 text-zinc-500 hover:border-white/25 hover:text-zinc-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((proj, i) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
              >
                <ProjectCards {...proj} index={i} fanned={false} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length > 3 && (
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="mt-4 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {showAll ? "Show less" : `Show all ${filtered.length}`}
            <span aria-hidden="true">{showAll ? " −" : " +"}</span>
          </button>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        />
      </div>
    </section>
  );
}