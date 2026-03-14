import React, { useRef, useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';

// Components
import { Navbar } from '@/components/Navbar';
import { CursorEffect } from '@/components/CursorEffect';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import VaibhavScrollCanvas from '@/components/VaibhavScrollCanvas';
import { FrameSequenceHUD } from '@/components/FrameSequenceHUD';

const TOTAL_FRAMES = 240;

/**
 * Main Cinematic Portfolio Page
 * Locks the viewport for 600vh to play the frame sequence animation.
 */
export default function Index() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress across the animation section
  // Start: top of section hits viewport top
  // End: bottom of section hits viewport bottom
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="bg-background text-foreground selection:bg-neon-blue/30">
      <Navbar />
      <CursorEffect />

      {/* --- HERO SCROLL SEQUENCE (STUCK SECTION) --- */}
      <section 
        ref={containerRef} 
        className="relative h-[600vh] w-full z-10"
      >
        {/* The screen stays fixed here while the outer container scrolls */}
        <div className="fixed top-0 left-0 h-screen w-full overflow-hidden z-10">
          
          {/* Background: Frame Animation */}
          <VaibhavScrollCanvas
            scrollYProgress={scrollYProgress}
            totalFrames={TOTAL_FRAMES}
            imageFolderPath={isMobile ? "/images/mobile-sequence" : "/images/desktop-sequence"}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Foreground: Active HUD layers */}
          <FrameSequenceHUD scrollYProgress={scrollYProgress} />
          
        </div>
      </section>

      {/* --- NORMAL PAGE CONTENT (RELAXED SECTION) --- */}
      <div className="relative z-30 bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
        {/* Unique Transition Animation: Scanning Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent shadow-[0_0_20px_rgba(0,255,255,0.8)] animate-pulse">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-neon-cyan shadow-[0_0_30px_#00ffff]"></div>
        </div>
        
        {/* Visual bridge: Show only the profile image to transition */}
        <Hero showOnlyImage={true} />
        
        <div className="max-w-7xl mx-auto">
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
