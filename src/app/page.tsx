"use client";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import CVPrint from "@/components/sections/CVPrint";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import { LangProvider } from "@/components/sections/LangContext";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";


export default function Home() {
  return (
    <LangProvider>
      <div className="min-h-screen">
        <header className="print:hidden">
              <Navbar />
        </header>
      
        {/*on cache le contenus interactif du site a l'impression */}
          <main className="print:hidden">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </main>
            
           {/* Hidden CV template — visible only on print */}
           <CVPrint />
      </div>
    </LangProvider>
  )
}
