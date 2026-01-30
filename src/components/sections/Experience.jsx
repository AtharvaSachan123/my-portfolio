import { EXPERIENCE } from '../../data';

const ExperienceSection = () => {
  return (
    <section className="exp-section py-32 px-6 md:px-20 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 relative pl-8 border-l-2 border-transparent">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-[0.4em] mb-4">My Journey</p>
          <h3 className="font-['Syne'] text-[5vw] font-black uppercase leading-none text-white drop-shadow-xl">
            Career <span className="text-purple-500">Chronicles</span>
          </h3>
        </div>
        
        <div className="exp-container relative pl-8 md:pl-16">
          <div className="absolute top-0 left-0 w-px h-full bg-white/10 z-0"></div>
          <div className="line-fill absolute top-0 left-0 w-px bg-purple-500 h-0 z-10">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]"></div>
          </div>
          
          <div className="space-y-24">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="exp-card relative group">
                <span className="absolute -left-[38px] md:-left-[70px] top-6 w-3 h-3 bg-black border border-gray-600 rounded-full group-hover:bg-purple-500 group-hover:border-purple-500 transition-colors duration-300 z-20"></span>
                
                <div className="p-8 md:p-12 rounded-4xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:bg-white/[0.07] backdrop-blur-sm">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <h4 className="font-['Syne'] text-3xl md:text-4xl font-black text-white pb-2 leading-normal">
                        {job.company}
                      </h4>
                      <span className="text-xs font-mono text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full uppercase tracking-widest bg-purple-900/10 w-fit">
                        {job.time}
                      </span>
                    </div>
                    <span className="text-xl md:text-2xl text-purple-400 font-medium">{job.role}</span>
                    <p className="text-gray-300 max-w-4xl text-lg font-light leading-relaxed mt-4 font-['Space_Grotesk']">
                      {job.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
