import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SkillPill from "@/components/SkillPill";
import { skillGroups } from "@/data/skills";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full bg-transparent scroll-mt-24"
    >
      <div className="w-full">
        <div className="border-t border-zinc-200 dark:border-zinc-800 mb-12" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-10"
        >
          <motion.p
            variants={rowVariants}
            className="uppercase tracking-widest text-sm font-medium text-zinc-500 font-mono"
          >
            Skills & Stack
          </motion.p>

          <motion.h2
            variants={rowVariants}
            className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 -mt-4"
          >
            What I build with
          </motion.h2>

          <div className="flex flex-col border-y border-zinc-200 dark:border-zinc-800">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.label}
                variants={rowVariants}
                className="grid grid-cols-1 md:grid-cols-[180px_1fr] border-b border-zinc-200 dark:border-zinc-800 last:border-b-0"
              >
                <p className="flex items-baseline gap-3 py-4 md:py-5 md:border-r md:border-dashed md:border-zinc-200 md:dark:border-zinc-800 text-sm text-zinc-800 dark:text-zinc-200">
                  <span className="font-mono text-zinc-400 dark:text-zinc-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {group.label}
                </p>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex flex-wrap gap-1.5 pb-4 md:py-5 md:pl-5"
                >
                  {group.items.map((item) => (
                    <SkillPill key={item.name} {...item} />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
