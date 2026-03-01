import { Suspense, lazy } from "react";
const ParticlesBackground = lazy(() => import("./components/ParticlesBackground"));
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>
      <div className="relative z-1 overflow-hidden">
        <Navbar />
        <main className="grow">
          <Home/>
        </main>
      </div>
    </>
  );
}
