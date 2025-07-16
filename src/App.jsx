import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Projects from "./sections/Projects";
// import Contact from "./sections/Contact";
// import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <ParticlesBackground />
      <div className="relative z-1 overflow-hidden">
        <Navbar />
        <main className="grow">
        <Home/>
        

        </main>

        {/* <Projects /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
