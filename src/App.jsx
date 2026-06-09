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
      <div className="relative flex justify-center  min-h-screen bg-transparent text-zinc-900 dark:text-zinc-50 overflow-hidden">
        <Navbar />
        <main className="relative z-10 min-w-[70%] max-w-2xl px-2 sm:px-4 md:px-6">
          <Home />
        </main>
      </div>
    </>
  );
}
