import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MoonStar, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      maxWidth: scrolled ? "60%" : "100%",
      borderRadius: scrolled ? "9999px" : "0px", // Tailwind's full rounded is 9999px
      backgroundColor: scrolled
        ?  "rgba(255,255,255,0.05)"
        : "rgba(9, 9, 10, 0.1)",
      backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
      marginTop:scrolled ? "2%" : " 1%",
      boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
      transition: { duration: 0.4, ease: "easeInOut" },
      
    });
  }, [scrolled, controls]);

  // Toggle dark/light mode
  const handleThemeToggle = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full flex justify-center">
        <motion.nav
          // initial={{ opacity: 0, y: -50 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          animate={controls}
          initial={{ maxWidth: "0%" }}
          className="
            w-full flex items-center justify-between px-8 py-0 h-13
            mx-auto
            text-foreground border-b-emerald-100 
          "
        >
          <div className="text-emerald-500 text-2xl font-secondary">AM</div>

          <div className="hidden md:flex space-x-8 text-foreground font-glora">
            <a href="#hero" className="hover:text-gray-300">
              Home
            </a>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme toggle button */}
            <button
              onClick={handleThemeToggle}
              className="text-xl p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle dark mode"
            >

              {isDark ? <MoonStar /> : <Sun />}
            </button>
            <button
              className="text-foreground md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
            
          </div>

          {isOpen && (
            <div className="absolute top-20 right-8 text-foreground rounded-md p-4 flex flex-col space-y-4 md:hidden">
              <a href="#hero" onClick={() => setIsOpen(false)}>
                Home
              </a>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </div>
          )}
        </motion.nav>
      </div>
    </header>
  );
}
