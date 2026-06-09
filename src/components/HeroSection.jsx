import { useState, useEffect } from "react";
import { MapPin, Mail, Youtube, Users, Clock , Mars, CodeXml, CodeXmlIcon } from "lucide-react";
const avatarSrc = "https://assets.pinterest.com/ext/embed.html?id=1011339660096812785g";
const bannerSrc = "https://assets.pinterest.com/ext/embed.html?id=1011339660096812785g";

export default function HeroSection({ avatarSrc, bannerSrc }) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      setCurrentTime(istTime.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) + " IST");
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const contacts = [
    { icon: <CodeXml className="w-4 h-4"/>, label: "Freelance Full-Stack Dev" },
    { icon: <Clock className="w-4 h-4" /> , label: currentTime },
    { icon: <MapPin className="w-4 h-4" />, label: "Jodhpur, Rajasthan, IN" },
    { icon: <Mail className="w-4 h-4" />, label: "ayaanmev@gmail.com" },
    // { icon: <Youtube className="w-4 h-4" />, label: "Behind The Powers" },
    { icon: <Mars className="w-4 h-4" />, label: "he/him" },
  ];

  const socials = [
    { href: "https://twitter.com/@mevayaan01", icon: "𝕏", label: "X", bg: "bg-black border-zinc-700" },
    { href: "https://github.com/mevayaan1", icon: "⌥", label: "GitHub", bg: "bg-[#161b22] border-[#30363d]" },
    { href: "https://linkedin.com/in/mevayaan01", icon: "in", label: "LinkedIn", bg: "bg-[#0a66c2]" },
    // { href: "https://youtube.com/@behindthepowers", icon: "▶", label: "YouTube", bg: "bg-[#ff0000]" },
  ];

  return (
    <section className="relative z-10 bg-transparent">
      {/* Banner */}
    <div>
      <div className="relative h-36 md:h-44 overflow-hidden">
        {bannerSrc ? (
          <img
            src={bannerSrc}
            alt="Banner"
            className="w-full h-full object-cover opacity-50 [image-rendering:pixelated]"
          />
        ) : (
          <div className="w-full h-full bg-zinc-900 relative">
            <div
              className="absolute inset-0 opacity-3"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 8px), repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 8px)",
              }}
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950" />
      </div>

      {/* Avatar */}
      <div className="absolute bottom-[50%] right-8">
        <div className="w-22 md:w-34 lg:w-46 aspect-square rounded-full  ring-3 ring-white-950 overflow-hidden">
          {avatarSrc ? (
            <img src={avatarSrc} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-2xl font-bold">
              ...
            </div>
          )}
        </div>
      </div>
    </div>
      {/* Identity */}
      <div className="pt-3 pb-0 px-7">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-2xl font-medium tracking-tight text-zinc-50 font-mono">
            Ayaan Mev
          </h1>
          <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px]">
            ✓
          </span>
        </div>
        <p className="text-sm text-zinc-500 font-mono tracking-wide mb-5">
          Full-Stack Developer · Building things for the web
        </p>
      </div>

      {/* Contacts */}
      <div className="border-t border-zinc-800">
        <div className="grid grid-cols-2 mx-7">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`flex items-center gap-2.5 py-2.5 text-sm text-zinc-400 font-mono border-b border-zinc-800/60 ${
                index % 2 === 0 ? "border-r border-zinc-800/60 pr-5" : "pl-5"
              }`}
            >
              <span className="w-7 h-7 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-xs text-zinc-400 flex-shrink-0">
                {contact.icon}
              </span>
              <span className="text-zinc-300">{contact.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Cards */}
      <div className="border-t border-zinc-800">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-7 py-3.5 hover:bg-zinc-900/60 transition-colors group ${
                index < socials.length - 1 ? "border-r border-zinc-800" : ""
              }`}
            >
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${social.bg}`}>
                {social.icon}
              </span>
              <span className="text-sm text-zinc-300 font-mono">{social.label}</span>
              <span className="ml-auto text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}