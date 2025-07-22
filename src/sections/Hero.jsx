import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[80vh] w-full bg-transparent px-3  pt-16">
      {/* Name and dot */}
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5}}
        className="flex items-center gap-4 mb-8"
      >
        <h1 className="text-[3rem] md:text-[4rem] font-serif italic font-bold text-primary tracking-tight">
          Ayaan Mev
        </h1>
        {/* <h1 className="text-[12rem] md:text-[4rem]">.</h1> */}
        <span className="inline-block w-5 h-5 rounded-full bg-primary" />
      </motion.div>
      {/* Main content row */}
      <div className="flex flex-row items-center justify-center gap-6 w-full max-w-3xl">
        {/* Left image */}
        <img
          src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"
          alt="left visual"
          className="w-32 h-24 object-cover rounded-xl shadow-lg hidden md:block"
        />
        {/* Text block */}
        <div className="flex flex-col items-center md:items-start flex-1">
          <motion.span
          animate={{ y:0 , opacity: 1 }}
          initial={{ y:20, opacity: 0 }}
          transition={{ duration: 0.2 }}
           className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-none">
            LET'S CODE
          </motion.span>
          <motion.span
          animate={{ y:0 , opacity: 1 }}
          initial={{ y:20, opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.5 }}
           className="text-4xl md:text-6xl italic font-serif text-foreground leading-none">
            & SHIP
          </motion.span>
        </div>
        {/* Right image and small text */}
        <div className="flex flex items-center">
          <img
            src="https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif"
            alt="right visual"
            className="min-w-xl-32 h-24 object-cover rounded-xl shadow-lg mb-2"
          />
          <span className="text-xs text-[--color-primary] text-center mt-1">
            WITH<br />GOOD<br />AESTHETIC<br />VISION
          </span>
        </div>
      </div>
    </section>
  );
}
