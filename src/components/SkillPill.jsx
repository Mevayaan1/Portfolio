import { motion } from "framer-motion";

const pillVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function SkillPill({ name, icon: Icon, color }) {
  return (
    <motion.span
      variants={pillVariants}
      whileHover={{ scale: 1.04 }}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 font-mono text-[13px] leading-5 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200 cursor-default whitespace-nowrap"
    >
      <Icon
        aria-hidden="true"
        className={`w-3.5 h-3.5 flex-shrink-0 ${
          color ? "" : "text-zinc-800 dark:text-zinc-200"
        }`}
        style={color ? { color } : undefined}
      />
      {name}
    </motion.span>
  );
}
