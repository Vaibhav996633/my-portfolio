import { Navbar } from '../components/Navbar';
import { CursorEffect } from '../components/CursorEffect';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import RevealEffectLoader from '../components/RevealEffectLoader';


export default function Index() {
  return (
    <RevealEffectLoader>
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <CursorEffect />
        <Navbar />

        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </RevealEffectLoader>
  );
}
