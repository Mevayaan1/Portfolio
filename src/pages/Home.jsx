import Draggable from "@/sections/Draggable";
import ParallaxText from "../components/ParallaxText";
import FeatureProjects from "../sections/FeatureProjects";
import Hero from "../sections/Hero";
import HeroAbout from "../sections/HeroAbout";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <div className=" relative flex w-full flex-col justify-content-center bg-transparent ">
      <section className=" ">
        <Hero />
        <ParallaxText
          baseVelocity={-5}
          className=" top-[40%] text-[clamp(1.5rem,4vw+1rem,4rem)] text-2xl md:text-3xl lg:text-5xl"
        >
          {" "}
          Creative Developer • React • Tailwind • Motion
        </ParallaxText>
        <ParallaxText
          baseVelocity={5}
          className="top-[50%] text-[clamp(1.5rem,4vw+1rem,4rem)] text-2xl md:text-3xl lg:text-5xl"
        >
          {" "}
          Creative Developer • React • Tailwind • Motion
        </ParallaxText>
        <HeroAbout />
        
        <FeatureProjects arrange="fanned" />
        {/* <Draggable /> */}
        {/* <Skills /> */}
        <Contact />
       
        <Footer />
      </section>
    </div>
  );
}
