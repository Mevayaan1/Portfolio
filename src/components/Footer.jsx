import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-black/60 text-gray-400 flex flex-col items-center mt-12">
      <div className="flex gap-6 mb-2">
        <a href="#hero" className="hover:text-emerald-400">Home</a>
        <a href="#about" className="hover:text-emerald-400">About</a>
        <a href="#projects" className="hover:text-emerald-400">Projects</a>
        <a href="#contact" className="hover:text-emerald-400">Contact</a>
      </div>
      <div className="flex gap-4 mb-2">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:your@email.com" className="hover:text-emerald-400">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p className="text-xs">&copy; {new Date().getFullYear()} Ayaan. All rights reserved.</p>
    </footer>
  );
} 