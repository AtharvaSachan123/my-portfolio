const Navbar = () => {
  return (
    <nav className="fixed w-full z-60 px-8 py-8 flex justify-between items-center mix-blend-difference">
      <span className="font-['Syne'] font-black text-lg tracking-tighter">AS.</span>
      <a 
        href="#work" 
        className="text-[10px] font-bold border border-white/20 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all uppercase tracking-widest"
      >
        Work
      </a>
    </nav>
  );
};

export default Navbar;
