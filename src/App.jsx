import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

import {
  StarField,
  Navbar,
  HeroSection,
  PerformanceSection,
  StackSection,
  ExperienceSection,
  ProjectsSection,
  Footer
} from './components';

gsap.registerPlugin(ScrollTrigger);

const GlobalStyles = () => (
  <style>{`
    html, body {
      background-color: #000000;
      color: #ffffff;
      margin: 0;
      padding: 0;
    }
  `}</style>
);

const App = () => {
  const container = useRef();

  // Smooth Scrolling with Lenis
  useLayoutEffect(() => {
    const lenis = new Lenis({ 
      duration: 1.5, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true 
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  // GSAP Animations
  useGSAP(() => {
    // Stacking Logic
    ScrollTrigger.create({ trigger: ".hero-section", start: "top top", end: "bottom top", pin: true, pinSpacing: false });
    ScrollTrigger.create({ trigger: ".perf-section", start: "top top", end: "bottom top", pin: true, pinSpacing: false });
    ScrollTrigger.create({ trigger: ".stack-section", start: "top top", end: "bottom top", pin: true, pinSpacing: true });

    // Parallax Text
    gsap.to(".hero-bg-text", { y: -50, ease: "none", scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".perf-bg-text", { y: -50, ease: "none", scrollTrigger: { trigger: ".perf-section", start: "top bottom", end: "bottom top", scrub: true } });
    gsap.to(".stack-bg-text", { y: -50, ease: "none", scrollTrigger: { trigger: ".stack-section", start: "top bottom", end: "bottom top", scrub: true } });
    gsap.to(".work-bg-text", { x: -100, ease: "none", scrollTrigger: { trigger: "#work", start: "top bottom", end: "bottom top", scrub: true } });

    // Entry Animations
    gsap.from(".stack-fg-text", {
      scale: 0.9, 
      opacity: 0, 
      duration: 1,
      scrollTrigger: { trigger: ".stack-section", start: "top center", toggleActions: "play reverse play reverse" }
    });

    // Experience Section Animations
    gsap.fromTo(".line-fill", 
      { height: "0%" }, 
      { height: "100%", ease: "none", scrollTrigger: { trigger: ".exp-container", start: "top center", end: "bottom center", scrub: true } }
    );
    gsap.from(".exp-card", { 
      x: -50, 
      opacity: 0, 
      duration: 1, 
      stagger: 0.3, 
      scrollTrigger: { trigger: ".exp-container", start: "top 70%", toggleActions: "play none none reverse" } 
    });
    
    // Projects Animation
    gsap.from(".project-card", { 
      y: 100, 
      opacity: 0, 
      duration: 1, 
      stagger: 0.3, 
      scrollTrigger: { trigger: "#work", start: "top 50%", toggleActions: "play none none reverse" } 
    });

  }, { scope: container });

  return (
    <div ref={container} className="bg-black text-white font-['Space_Grotesk'] selection:bg-purple-500/30 overflow-x-hidden min-h-screen">
      <GlobalStyles />
      <StarField />
      <Navbar />

      {/* Hero Sections */}
      <HeroSection />
      <PerformanceSection />
      <StackSection />

      {/* Content Layer */}
      <div className="relative z-30 bg-black shadow-[0_-50px_100px_rgba(0,0,0,1)]">
        <ExperienceSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
