import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-transparent py-12 scroll-mt-24">
      <div className="w-full">
        {/* Top Border Line */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 mb-12" />

        <div className="flex flex-col gap-8 max-w-4xl">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-bold font-primary text-zinc-900 dark:text-zinc-50">
            About
          </h2>

          {/* About Content List */}
          <ul className="flex flex-col gap-6">
            <motion.li 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-4 items-start"
            >
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-primary">
                Full-Stack Developer with 1+ year of freelance experience, specialized in delivering production-grade web applications for diverse industries.
              </p>
            </motion.li>

            <motion.li 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4 items-start"
            >
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-primary">
                Passionate about creating seamless user experiences and robust backend architectures using the modern JavaScript ecosystem.
              </p>
            </motion.li>

            <motion.li 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 items-start"
            >
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-primary">
                Developer of <span className="underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 cursor-help">Heer Fragrance</span>, <span className="underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 cursor-help">UniForm Billing</span>, and <span className="underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 cursor-help">Viraat Builders</span> — delivering real-world business solutions.
              </p>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
}
