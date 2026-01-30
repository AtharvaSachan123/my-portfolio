import { ArrowUpRight } from 'lucide-react';
import { SOCIALS } from '../../data';

const Footer = () => {
  return (
    <footer className="min-h-[60vh] py-20 px-6 md:px-20 bg-black border-t border-white/10 flex flex-col md:flex-row justify-between items-center md:items-end relative overflow-hidden">
      
      {/* Purple Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[30vw] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Left: Heading */}
      <div className="w-full md:w-auto text-center md:text-left mb-16 md:mb-0 z-10">
        <h2 className="font-['Syne'] font-black text-[12vw] md:text-[8vw] leading-[0.8] tracking-tighter">
          <span className="text-gray-800">LET'S</span><br/>
          <span className="text-purple-500">TALK.</span>
        </h2>
      </div>

      {/* Right: Vertical Link List */}
      <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-4 z-10">
        {SOCIALS.map((link, i) => (
          <a 
            key={i} 
            href={link.url} 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm md:text-base font-mono uppercase tracking-[0.2em]">{link.name}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
