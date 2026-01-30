import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data';

const ProjectsSection = () => {
  return (
    <section id="work" className="relative py-32 px-6 md:px-20 bg-black min-h-screen overflow-hidden">
      <h2 className="work-bg-text absolute top-20 right-0 font-['Syne'] text-[15vw] font-black text-white/5 leading-none pointer-events-none whitespace-nowrap z-0">
        SELECTED WORKS
      </h2>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-32 relative">
          <div className="absolute -left-10 top-0 w-0.5 h-20 bg-purple-500"></div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-[0.4em] mb-4">Portfolio</p>
          <h3 className="font-['Syne'] text-[5vw] font-black uppercase leading-none text-white drop-shadow-xl">
            Featured <br/>
            <span className="text-purple-500">Projects</span>
          </h3>
        </div>

        <div className="space-y-40">
          {PROJECTS.map((proj, i) => (
            <div key={i} className="project-card flex flex-col md:flex-row items-center gap-12 md:gap-20">
              
              {/* Image */}
              <div className="w-full md:w-3/5 group cursor-pointer relative">
                <div className="absolute inset-0 bg-purple-600/30 blur-[50px] rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] transition-all duration-500 group-hover:border-purple-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                  <div className="h-10 bg-white/5 border-b border-white/10 flex items-center gap-2 px-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors"></div>
                  </div>
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img src={proj.img} alt={proj.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-purple-500 font-mono text-xs uppercase tracking-widest">{proj.id} / {proj.cat}</span>
                  <div className="h-px flex-1 bg-white/10"></div>
                </div>
                <h3 className="font-['Syne'] text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {proj.stack.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 font-mono uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-white border-b border-purple-500 w-fit pb-1 hover:text-purple-400 hover:pl-2 transition-all duration-300"
                >
                  View <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
