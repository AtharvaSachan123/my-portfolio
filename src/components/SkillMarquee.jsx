import { SKILLS } from '../data';

const SkillMarquee = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full z-30 py-6 overflow-hidden bg-gradient-to-t from-black via-black/80 to-transparent">
       <style>{`
         @keyframes marquee {
           0% { transform: translateX(0); }
           100% { transform: translateX(-50%); }
         }
         .marquee-track {
           display: flex;
           width: max-content;
           animation: marquee 30s linear infinite;
         }
       `}</style>
       
       <div className="marquee-track flex gap-16 px-4 whitespace-nowrap">
          {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => (
            <span 
              key={i} 
              className="text-4xl md:text-5xl font-['Syne'] font-bold uppercase tracking-tighter text-transparent opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}
            >
              {skill}
            </span>
          ))}
       </div>
    </div>
  );
};

export default SkillMarquee;
