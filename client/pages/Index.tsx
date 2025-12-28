
import { Navbar } from '@/components/Navbar';
import { CursorEffect } from '@/components/CursorEffect';
import { InteractiveInsect } from '@/components/InteractiveInsect';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import ThreeCube from "../components/ThreeCube";
import RevealEffectBg from "../components/RevealEffectBg";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 3D Reveal Effect Background */}
      <RevealEffectBg />
      <CursorEffect />
      <InteractiveInsect />
      <Navbar />

      <main className="relative">
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', zIndex: 10, position: 'relative' }}>
          <ThreeCube />
        </div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

