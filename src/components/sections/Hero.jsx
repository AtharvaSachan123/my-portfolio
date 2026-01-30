import SkillMarquee from './SkillMarquee';

const HeroSection = () => {
  return (
    <section className="hero-section h-screen w-full flex justify-center items-center relative z-0 bg-black">
      <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden">
        <h2 className="hero-bg-text absolute font-['Syne'] text-[25vw] font-black text-white/5 select-none tracking-tighter leading-none pointer-events-none">
          DEV
        </h2>
        <div className="text-center relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[20vw] bg-purple-900/40 blur-[100px] rounded-full -z-10"></div>
          <h1 className="font-['Syne'] text-[6vw] leading-[0.9] font-black uppercase tracking-tight text-center">
            Atharva<br />
            <span className="text-purple-500 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">Sachan</span>
          </h1>
          <div className="mt-12 flex flex-col items-center gap-4 opacity-50">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
            <p className="text-[10px] tracking-[0.4em] uppercase font-light">Scroll</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PerformanceSection = () => {
  return (
    <section className="perf-section h-screen w-full flex justify-center items-center relative z-10 bg-black shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
      <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden">
        <h2 className="perf-bg-text absolute font-['Syne'] text-[25vw] font-black text-white/5 select-none tracking-tighter leading-none pointer-events-none">
          BUILD
        </h2>
        <div className="perf-fg-text relative z-20 text-center flex flex-col items-center">
          <span className="block text-xs md:text-sm font-medium text-gray-400 tracking-[0.8em] mb-6 uppercase">
            Obsessed with
          </span>
          <div className="relative">
            <div className="absolute inset-0 bg-purple-600/30 blur-[60px] rounded-full"></div>
            <h2 className="relative font-['Syne'] text-[7vw] font-black uppercase leading-none tracking-tighter text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <span className="text-purple-500">Perfor</span>mance
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

const StackSection = () => {
  return (
    <section className="stack-section h-screen w-full flex justify-center items-center relative z-20 bg-black shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
      <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden">
        <h2 className="stack-bg-text absolute font-['Syne'] text-[25vw] font-black text-white/5 select-none tracking-tighter leading-none pointer-events-none">
          STACK
        </h2>
        <div className="stack-fg-text relative z-20 text-center px-6 flex flex-col items-center mb-24">
          <h2 className="relative font-['Syne'] text-[7vw] font-black uppercase leading-none tracking-tighter text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] mb-8">
            Full Stack<br/>
            <span className="text-purple-500">Developer</span>
          </h2>
          <p className="max-w-xl mx-auto text-xl font-light text-gray-400 leading-relaxed font-['Space_Grotesk']">
            <span className="text-white font-normal">Turning complex problems</span> into elegant solutions at{' '}
            <span className="text-white border-b border-white/20 pb-1">Juspay</span>.
          </p>
        </div>
        <SkillMarquee />
      </div>
    </section>
  );
};

export { HeroSection, PerformanceSection, StackSection };
