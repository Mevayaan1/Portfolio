import { Suspense, lazy } from "react";
import Draggable from "@/sections/Draggable";
const ParallaxText = lazy(() => import("../components/ParallaxText"));
const FeatureProjects = lazy(() => import("../sections/FeatureProjects"));
import HeroSection from "../components/HeroSection";
import HeroAbout from "../sections/HeroAbout";
import AboutSection from "../sections/AboutSection";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import Skills from "../sections/Skills";
const avatarSrc = "https://i.pinimg.com/736x/83/dd/29/83dd2961a32eec253eb6af37344a12f2.jpg";
const bannerSrc = "https://i.pinimg.com/736x/83/dd/29/83dd2961a32eec253eb6af37344a12f2.jpg";

export default function Home() {
  return (
    <div className="relative w-full bg-transparent lg:px-12">
      <HeroSection avatarSrc={avatarSrc} bannerSrc={bannerSrc} />
      <div className="space-y-16 max-w-7xl mx-auto">
        <AboutSection />
        <Skills />
        <Suspense fallback={null}>
          <FeatureProjects arrange="grid" />
        </Suspense>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
