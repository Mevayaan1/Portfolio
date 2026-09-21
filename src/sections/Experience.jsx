import { motion } from "framer-motion";
import { Briefcase, CodeXml } from "lucide-react";
import SkillPill from "@/components/SkillPill";
import { skillByName } from "@/data/skills";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const experiences = [
  {
    company: "Unplanned Labs",
    companyUrl: "https://www.unplannedlabs.com",
    logo: "/images/unplannedlabs.png",
    location: "Remote",
    position: "Backend Developer",
    type: "Full-time",
    start: { year: 2026, month: 8 },
    description: (
      <>
        Building backend infrastructure and APIs for{" "}
        <a
          href="https://www.caforavibes.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 hover:decoration-zinc-500 transition-colors"
        >
          Cafora
        </a>
        , Unplanned Labs&apos; café discovery platform.
      </>
    ),
    stack: ["NestJS", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Docker"],
  },
  {
    company: "Freelance",
    location: "Jodhpur, India",
    position: "Full-Stack Developer",
    type: "Part-time",
    start: { year: 2025, month: 9 },
    description:
      "Delivering custom web solutions for clients across e-commerce, billing and construction, alongside my full-time role.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Supabase"],
  },
];

function duration({ year, month }) {
  const now = new Date();
  const total = Math.max(1, (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month));
  const y = Math.floor(total / 12);
  const m = total % 12;
  return [y && `${y}y`, m && `${m}m`].filter(Boolean).join(" ");
}

const Divider = () => <span aria-hidden="true" className="h-3.5 w-px bg-zinc-300 dark:bg-zinc-700" />;

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-transparent scroll-mt-24">
      <div className="w-full">
        <div className="border-t border-zinc-200 dark:border-zinc-800 mb-12" />

        <div className="flex flex-col gap-10">
          <p className="uppercase tracking-widest text-sm font-medium text-zinc-500 font-mono">
            Experience
          </p>
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 -mt-4">
            Where I&apos;ve worked
          </h2>

          <div className="flex flex-col border-y border-zinc-200 dark:border-zinc-800">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="py-5 border-b border-zinc-200 dark:border-zinc-800 last:border-b-0"
              >
                <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700/60 bg-white">
                      {exp.logo ? (
                        <img src={exp.logo} alt="" className="h-full w-full object-cover" />
                      ) : (
                        <Briefcase className="h-4 w-4 text-zinc-500" aria-hidden="true" />
                      )}
                    </span>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-zinc-900 dark:text-zinc-50 hover:underline underline-offset-4 decoration-zinc-400"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <span className="text-lg font-medium text-zinc-900 dark:text-zinc-50">{exp.company}</span>
                    )}
                  </div>
                  <span className="flex items-center gap-2 font-mono text-[13px] text-zinc-500">
                    {exp.location}
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                      title="Currently active"
                      aria-label="Currently active"
                    />
                  </span>
                </header>

                <div className="relative mt-4 grid grid-cols-[36px_1fr] gap-x-3">
                  <span
                    aria-hidden="true"
                    className="absolute left-[17px] -top-4 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800"
                  />
                  <span className="relative z-10 mt-0.5 flex h-7 w-7 items-center justify-center justify-self-center rounded-md border border-zinc-200 dark:border-zinc-700/60 bg-zinc-100 dark:bg-zinc-900">
                    <CodeXml className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-300" aria-hidden="true" />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-50">{exp.position}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[13px] text-zinc-500">
                      <span>{exp.type}</span>
                      <Divider />
                      <span>
                        {MONTHS[exp.start.month - 1]} {exp.start.year} – Present
                      </span>
                      <Divider />
                      <span>{duration(exp.start)}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {exp.description}
                    </p>
                    {exp.stack.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.stack.map((name) => (
                          <SkillPill key={name} {...skillByName[name]} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
