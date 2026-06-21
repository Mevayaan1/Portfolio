import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MoonStar, Sun } from "lucide-react";
import NavLogo from "./ui/Navlogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const dark = document.documentElement.classList.contains("dark");

    controls.start({
      maxWidth: scrolled ? "60%" : "100%",
      borderRadius: scrolled ? "9999px" : "0px",
      // Light: white/80, Dark: zinc-950/80
      backgroundColor: scrolled
        ? dark
          ? "rgba(9, 9, 11, 0.75)"
          : "rgba(255, 255, 255, 0.80)"
        : dark
          ? "rgba(9, 9, 10, 0.1)"
          : "rgba(255, 255, 255, 0.1)",
      backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
      // Light mode scrolled: subtle zinc border; dark: white glow
      boxShadow: scrolled
        ? dark
          ? "0 4px 30px rgba(0, 0, 0, 0.3)"
          : "0 4px 30px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0,0,0,0.06)"
        : "none",
      marginTop: scrolled ? "2%" : "1%",
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  }, [scrolled, isDark, controls]);

  const handleThemeToggle = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full flex justify-center">
        <motion.nav
          animate={controls}
          initial={{ maxWidth: "0%" }}
          transition={{ duration: 1 }}
          className="
            w-full flex items-center justify-between px-8 py-0 h-13
            mx-auto text-foreground
          "
        >
          <NavLogo />

          <div className="hidden md:flex space-x-8 font-glora text-zinc-700 dark:text-zinc-300">
            {["hero", "about", "projects", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="capitalize hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {id === "hero" ? "Home" : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleThemeToggle}
              className="
                p-2 rounded-full transition-colors text-zinc-600 dark:text-zinc-300
                bg-zinc-100 hover:bg-zinc-200
                dark:bg-white/10 dark:hover:bg-white/20
              "
              aria-label="Toggle dark mode"
            >
              {isDark ? <MoonStar className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <button
              className="text-zinc-700 dark:text-foreground md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>

          {isOpen && (
            <div className="
              absolute top-20 right-8 rounded-xl p-4 flex flex-col space-y-4 md:hidden
              bg-white dark:bg-zinc-900
              border border-zinc-200 dark:border-zinc-800
              shadow-lg
              text-zinc-700 dark:text-zinc-300
            ">
              {["hero", "about", "projects", "contact"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-zinc-900 dark:hover:text-white transition-colors capitalize"
                >
                  {id === "hero" ? "Home" : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </div>
          )}
        </motion.nav>
      </div>
    </header>
  );
}