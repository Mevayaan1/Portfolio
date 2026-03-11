import { Suspense, lazy } from "react";
import Draggable from "@/sections/Draggable";
const ParallaxText = lazy(() => import("../components/ParallaxText"));
const FeatureProjects = lazy(() => import("../sections/FeatureProjects"));
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

        {/* <HeroAbout /> */}
        <Skills />
        <Suspense fallback={null}>
          <FeatureProjects arrange="grid" />
        </Suspense>
        {/* <Draggable /> */}
        {/* <Skills /> */}
        <Contact />
       
        <Footer />
      </section>
    </div>
  );
}
