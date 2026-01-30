import solcanvasImg from '../assets/solcanvas.png';
import prescriptoImg from '../assets/prescripto.png';
import pollingImg from '../assets/polling.png';
import bountychainImg from '../assets/bountychain.png';

export const EXPERIENCE = [
  { 
    company: "Juspay", 
    role: "Product Engineer Intern", 
    time: "Jul 2025 - Present", 
    desc: "Strengthened Breeze D2C payment platform. Built LLM-powered analytics dashboard." 
  },
  { 
    company: "Ignitex Solutions", 
    role: "React Developer Intern", 
    time: "Nov 2024 - Feb 2025", 
    desc: "Delivered responsive UI features increasing engagement by 18%." 
  }
];

export const PROJECTS = [
  { 
    id: "01",
    title: "Solcanvas", 
    cat: "Web3 / Solana", 
    desc: "Real-time collaborative pixel art platform on Solana blockchain. Features creator-curator workflows, gamified engagement, and secure wallet authentication.",
    stack: ["React", "Solana", "Web3.js", "Node.js"],
    img: solcanvasImg,
    link: "https://github.com/AtharvaSachan123/solcanvas"
  },
  { 
    id: "02",
    title: "Doctor Booking", 
    cat: "Healthcare / MERN", 
    desc: "A comprehensive platform for doctor discovery & appointments. Includes role-based dashboards, Razorpay payments, and real-time scheduling.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    img: prescriptoImg,
    link: "https://github.com/AtharvaSachan123/Prescripto"
  },
  { 
    id: "03",
    title: "Polling System", 
    cat: "System Design / Backend", 
    desc: "A highly scalable, real-time polling architecture. Handles high-concurrency voting with instant updates using WebSockets and efficient database locking.",
    stack: ["Node.js", "Socket.io", "TypeScript", "MongoDB"],
    img: pollingImg,
    link: "https://github.com/AtharvaSachan123/polling-system"
  },
  { 
    id: "04",
    title: "Bountychain", 
    cat: "Web3 / DeFi", 
    desc: "Decentralized bounty platform connecting developers with tasks. Smart contract-based escrow ensures secure payments upon task verification.",
    stack: ["Solana", "JavaScript", "Neurolink Juspay", "Next.js"],
    img: bountychainImg,
    link: "https://github.com/AtharvaSachan123/bountychain"
  }
];

export const SOCIALS = [
  { name: "GitHub", url: "https://github.com/AtharvaSachan123" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/atharva-sachan-975848252/" },
  { name: "Twitter", url: "https://x.com/Atharva_Sachan_" },
  { name: "Mail", url: "mailto:atharvasachan823@gmail.com" },
  { name: "LeetCode", url: "https://leetcode.com/u/_Atharva_Sachan_/" },
  { name: "CodeChef", url: "https://www.codechef.com/users/atharva_1156" },
  { name: "Codeforces", url: "https://codeforces.com/profile/atharva_sachan_" },
];

export const SKILLS = [
  "REACT", "NEXT.JS", "TYPESCRIPT", "SOLANA", "WEB3", 
  "NODE.JS", "TAILWIND", "GSAP", "JAVA", "POSTGRESQL"
];
