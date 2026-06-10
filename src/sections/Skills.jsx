import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const groups = [
  {
    label: "Frontend",
    items: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#ffffff" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Framer Motion", color: "#BB4CDB" },
      { name: "HTML / CSS", color: "#E34F26" },
      { name: "shadcn/ui", color: "#a1a1aa" },
      { name: "Vite", color: "#646CFF" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", color: "#339933" },
      { name: "Express", color: "#a1a1aa" },
      { name: "MongoDB", color: "#47A248" },
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "Supabase", color: "#3FCF8E" },
      { name: "REST APIs", color: "#FF6C37" },
      { name: "Prisma", color: "#cfb9d8ff" },
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { name: "Git", color: "#F05032" },
      { name: "GitHub", color: "#a1a1aa" },
      { name: "Docker", color: "#2496ED" },
      { name: "Vercel", color: "#ffffff" },
      { name: "Figma", color: "#F24E1E" },
      { name: "Postman", color: "#FF6C37" },
      { name: "Linux", color: "#FCC624" },
      { name: "VS Code", color: "#007ACC" },
      { name: "Nginx", color: "#009639" },
      { name: "Railway", color: "#7B2FBE" },
      { name: "Stripe", color: "#635BFF" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

function Pill({ name, color }) {
  return (
    <motion.span
      variants={pillVariants}
      whileHover={{ scale: 1.04 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-sm text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200 cursor-default whitespace-nowrap"
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: color }}
      />
      {name}
    </motion.span>
  );
}

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
          {/* Eyebrow */}
          <motion.p
            variants={rowVariants}
            className="uppercase tracking-widest text-sm font-medium text-zinc-500 font-mono"
          >
            Skills & Stack
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={rowVariants}
            className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 -mt-4"
          >
            What I build with
          </motion.h2>

          {/* Groups */}
          <div className="flex flex-col gap-8">
            {groups.map((group, gi) => (
              <motion.div
                key={group.label}
                variants={rowVariants}
                className="flex flex-col gap-3"
              >
                {/* Group label */}
                <p className="text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-600">
                  {group.label}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-zinc-100 dark:bg-zinc-900" />

                {/* Pills */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex flex-wrap gap-2 pt-1"
                >
                  {group.items.map((item) => (
                    <Pill key={item.name} name={item.name} color={item.color} />
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
