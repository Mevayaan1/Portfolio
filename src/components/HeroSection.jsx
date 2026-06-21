import { useState, useEffect } from "react";
import { MapPin, Mail, Clock, Mars, CodeXml, GithubIcon, LinkedinIcon } from "lucide-react";
import MorphingText from "@/components/MorphingText";

export default function HeroSection({ avatarSrc, bannerSrc }) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      setCurrentTime(istTime.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) + " IST");
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const contacts = [
    { icon: <CodeXml className="w-4 h-4 text-zinc-500 dark:text-foreground" />, label: "Freelance Full-Stack Dev" },
    { icon: <Clock className="w-4 h-4 text-zinc-500 dark:text-foreground" />, label: currentTime },
    { icon: <MapPin className="w-4 h-4 text-zinc-500 dark:text-foreground" />, label: "Jodhpur, Rajasthan, IN" },
    { icon: <Mail className="w-4 h-4 text-zinc-500 dark:text-foreground" />, label: "ayaanmev@gmail.com" },
    { icon: <Mars className="w-4 h-4 text-zinc-500 dark:text-foreground" />, label: "he/him" },
  ];

  const socials = [
    { href: "https://twitter.com/@mevayaan01", icon: "X", label: "X", bg: "bg-black text-white" },
    { href: "https://github.com/mevayaan1", icon: <GithubIcon className="w-4 h-4 text-white" />, label: "GitHub", bg: "bg-[#161b22]" },
    { href: "https://linkedin.com/in/mevayaan01", icon: <LinkedinIcon className="w-4 h-4 text-white" />, label: "LinkedIn", bg: "bg-[#0a66c2]" },
  ];

  const AVATAR_SIZE = "w-20 h-20 md:w-24 md:h-24 lg:w-38 lg:h-38";
  const AVATAR_OVERHANG = "pb-10 md:pb-12 lg:pb-14";

  return (
    <section className="relative z-10 bg-transparent">

      <div className={`relative ${AVATAR_OVERHANG}`}>
        {/* Banner */}
        <div className="h-36 md:h-44 overflow-hidden w-full">
          {bannerSrc ? (
            <img
              src={bannerSrc}
              alt="Banner"
              className="w-full h-full object-cover opacity-50 [image-rendering:pixelated]"
            />
          ) : (
            <div className="w-full h-full bg-zinc-100 dark:bg-zinc-900 relative" />
          )}
          {/* Gradient fades to the page background color in each mode */}
          <div className="absolute inset-x-0 top-0 h-36 md:h-44 bg-gradient-to-b from-transparent to-white dark:to-zinc-950" />
        </div>

        {/* Avatar */}
        <div className="absolute bottom-0 right-6 md:right-8">
          <div className={`aspect-square rounded-full ring-2 ring-zinc-200 dark:ring-zinc-800 overflow-hidden ${AVATAR_SIZE}`}>
            {avatarSrc ? (
              <img src={avatarSrc} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 text-2xl font-bold">
                ...
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Identity */}
      <div className="pt-3 pb-0 px-7">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 font-mono">
            Ayaan Mev
          </h1>
          <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px]">
            ✓
          </span>
        </div>
        <MorphingText
          className="text-sm text-zinc-400 dark:text-zinc-500 font-mono tracking-wide mb-5"
          words={[
            "Full-Stack Engineer",
            "React Developer",
            "Node.js Backend Dev",
            "Freelance Builder",
            "Open to Work",
          ]}
        />
      </div>

      {/* Contacts */}
      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="grid grid-cols-2 mx-7">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`flex items-center gap-2.5 py-2.5 text-sm font-mono
                border-b border-zinc-200/80 dark:border-zinc-800/60
                ${index % 2 === 0
                  ? "border-r border-zinc-200/80 dark:border-zinc-800/60 pr-5"
                  : "pl-5"
                }`}
            >
              <span className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/50 flex items-center justify-center text-xs flex-shrink-0">
                {contact.icon}
              </span>
              <span className="text-zinc-700 dark:text-zinc-300 truncate">{contact.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Cards */}
      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-7 py-3.5 transition-colors group
                hover:bg-zinc-100 dark:hover:bg-zinc-900/60
                ${index < socials.length - 1
                  ? "border-r border-zinc-200 dark:border-zinc-800"
                  : ""
                }`}
            >
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${social.bg}`}>
                {social.icon}
              </span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300 font-mono">{social.label}</span>
              <span className="ml-auto text-xs text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}