import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "Frontend",
    skills: [
      { name: "React / Next.js", dots: 5 },
      { name: "TypeScript",      dots: 4 },
      { name: "Tailwind CSS",    dots: 5 },
      { name: "Framer Motion",   dots: 3 },
      { name: "HTML / CSS",      dots: 5 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js / Express", dots: 5 },
      { name: "MongoDB",           dots: 4 },
      { name: "PostgreSQL",        dots: 3 },
      { name: "REST APIs",         dots: 5 },
      { name: "GraphQL",           dots: 2 },
    ],
  },
  {
    label: "Tools",
    tools: [
      "Git", "GitHub", "Docker", "Vercel",
      "Vite", "Figma", "Postman", "Linux",
      "VS Code", "Nginx", "Stripe", "Railway",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function Dots({ filled }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: i < filled
              ? "#10B981"                  // emerald-500 — filled dot
              : "rgba(255,255,255,0.1)",   // empty dot
          }}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full bg-transparent px-6 lg:px-12 py-24 scroll-mt-24"
    >
      <div className="w-full max-w-7xl">
        <div className="border-t border-white/10 mb-12" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-10"
        >
          {/* Label */}
          <motion.p
            variants={cardVariants}
            className="uppercase tracking-wide text-xs text-neutral-500/70 font-primary"
          >
            Skills & Stack
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <motion.div
                key={cat.label}
                variants={cardVariants}
                className="flex flex-col gap-6 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                {/* Card label */}
                <p className="font-primary text-xs text-neutral-500/70 uppercase tracking-widest">
                  {cat.label}
                </p>

                {/* Skill rows */}
                {cat.skills && (
                  <div className="flex flex-col gap-4">
                    {cat.skills.map((skill, i) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between">
                          <span className="font-primary text-sm text-neutral-300">
                            {skill.name}
                          </span>
                          <Dots filled={skill.dots} />
                        </div>
                        {i < cat.skills.length - 1 && (
                          <div className="mt-4 h-px w-full bg-white/5" />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Tool pills */}
                {cat.tools && (
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-primary text-xs text-neutral-400 border border-white/10 rounded-full px-3 py-1 hover:border-white/25 hover:text-neutral-200 transition-colors duration-200 cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}