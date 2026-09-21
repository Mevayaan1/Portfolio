import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "unplannedlabs",
      project: "caforavibes",
      position: "Backend Developer",
      type: "Full-time, Remote",
      startDate: "Aug 2026",
      description: "Building scalable backend infrastructure and APIs for caforavibes platform.",
    },
    {
      company: "Freelance",
      position: "Full-Stack Developer",
      type: "Part-time",
      description: "Delivering custom web solutions for diverse clients while maintaining full-time role.",
    },
  ];

  return (
    <section id="experience" className="w-full bg-transparent py-12 scroll-mt-24">
      <div className="w-full">
        {/* Top Border Line */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 mb-12" />

        <div className="flex flex-col gap-8 max-w-4xl">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-bold font-primary text-zinc-900 dark:text-zinc-50">
            Experience
          </h2>

          {/* Experience List */}
          <div className="flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 items-start pb-6 border-b border-zinc-200 dark:border-zinc-800 last:border-b-0"
              >
                <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        {exp.position}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-500">
                        {exp.company}
                        {exp.project && ` • ${exp.project}`}
                      </p>
                    </div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                      {exp.startDate}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                    {exp.type}
                  </p>
                  <p className="text-base md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-primary mt-2">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
