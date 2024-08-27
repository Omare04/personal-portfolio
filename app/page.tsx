import Image from "next/image";
import { Boxes } from "./components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import Homepage from "./components/homepage";
import Navbar from "./components/ui/navbar";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";
import { BackgroundBeams } from "./components/ui/background-beam";

// In your main component
export default function Home() {
  return (
    <main className="min-h-screen font-sans snap-y snap-mandatory overflow-hidden ">
      <Navbar />
      <div className="relative w-full min-h-full flex-col flex items-center bg-black snap-y snap-mandatory overflow-hidden">
        <Homepage />
        <About />
        <Projects />
        <Contact />
      </div>
      <BackgroundBeams />
    </main>
  );
}
