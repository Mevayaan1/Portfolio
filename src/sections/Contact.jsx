import { motion } from "framer-motion";

export default function Contact() {
  const leftLinks = [
    { id: "github", label: "GitHub", href: "https://github.com/mevayaan1" },
    { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/mevayaan01" },
    { id: "twitter", label: "Twitter", href: "https://twitter.com/@mevayaan01" },
  ];

  const rightLinks = [
    { id: "email", label: "Email", href: "mailto:ayaanmev01@email.com" },
    { id: "discord", label: "Discord", href: "https://discord.com/users/yourusername" },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  const LinkItem = ({ link }) => (
    <motion.a
      variants={itemVariants}
      href={link.href}
      target={link.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="flex items-center gap-2 group w-fit"
      style={{ textDecoration: "none" }}
      whileHover="hover"
    >
      <motion.span
        className="text-neutral-500/70 text-xs font-primary transition-colors duration-200 group-hover:text-primary"
      >
        &gt;
      </motion.span>
      <span className="text-sm font-primary text-neutral-300 transition-colors duration-200 group-hover:text-primary">
        {link.label}
      </span>
    </motion.a>
  );

  return (
    <section
      id="contact"
      className="w-full bg-transparent scroll-mt-24"
    >
      <div className="w-full">
        {/* Top divider */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 mb-12" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-12 items-start gap-6"
        >
          {/* Left: heading + description */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
            <motion.p
              variants={itemVariants}
              className="uppercase tracking-widest text-sm font-medium text-zinc-500"
            >
              Get In Touch
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight"
            >
              Let's build something together.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              Open to collaborations, freelance work, or just a friendly hello. Find me across these platforms.
            </motion.p>

            {/* Links in two columns */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-5 mt-2">
              <motion.div variants={containerVariants} className="flex flex-col gap-5">
                {leftLinks.map((link) => (
                  <LinkItem key={link.id} link={link} />
                ))}
              </motion.div>
              <motion.div variants={containerVariants} className="flex flex-col gap-5">
                {rightLinks.map((link) => (
                  <LinkItem key={link.id} link={link} />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}