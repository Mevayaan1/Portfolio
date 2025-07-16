import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can integrate with EmailJS, Formspree, etc.
  };

  return (
    <section id="contact" className="py-20 bg-transparent flex flex-col items-center justify-center px-6 md:px-12">
      <div className="max-w-xl w-full text-center">
        <h2 className="text-3xl font-bold text-emerald-400 mb-6 font-glora">Contact Me</h2>
        <p className="mb-8 text-gray-300">Feel free to reach out for collaborations or just a friendly hello 👋</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-black/40 p-6 rounded-xl shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded transition-colors"
          >
            Send Message
          </button>
          {submitted && <p className="text-emerald-400 mt-2">Thank you for reaching out!</p>}
        </form>
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 text-gray-300 text-2xl">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 text-gray-300 text-2xl">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="mailto:your@email.com" className="hover:text-emerald-400 text-gray-300 text-2xl">
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>
    </section>
  );
} 