import React from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Code2,
  Flame,
  Mail,
  ChevronUp,
  Shield
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#01040d] border-t border-slate-900 pt-12 pb-8 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP THREE-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/60 items-start">
          
          {/* Column 1: Hexagon Brand & Bio */}
          <div className="md:col-span-5 space-y-3 flex items-start gap-4">
            
            {/* Sleek Hexagon Logo */}
            <div className="w-12 h-14 relative flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                <polygon
                  points="50 3, 97 30, 97 85, 50 112, 3 85, 3 30"
                  fill="#080d1a"
                  stroke="url(#hexGrad)"
                  strokeWidth="6"
                />
                <defs>
                  <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute font-extrabold text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                HS
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-extrabold text-sm text-white tracking-wider uppercase">
                HIBA THARUNNUM SHAIK
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Building secure systems.<br />
                Securing the future.<br />
                Thank you for visiting my portfolio! <span className="text-purple-400">💜</span>
              </p>
            </div>

          </div>

          {/* Column 2: Let's Connect Social Circles */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Let's Connect
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/HibaShaik13"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#080d1a] border border-cyan-500/30 text-cyan-400 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 hover:scale-110 transition-all shadow-md"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/hiba-tharunnum-shaik-60a33b393/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#080d1a] border border-cyan-500/30 text-cyan-400 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 hover:scale-110 transition-all shadow-md"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://leetcode.com/u/Shaik_Hiba/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#080d1a] border border-cyan-500/30 text-cyan-400 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 hover:scale-110 transition-all shadow-md"
                title="LeetCode"
              >
                <Code2 className="w-4 h-4" />
              </a>

              <a
                href="https://www.codechef.com/users/vu241fa04495"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#080d1a] border border-cyan-500/30 text-cyan-400 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 hover:scale-110 transition-all shadow-md"
                title="CodeChef"
              >
                <Flame className="w-4 h-4" />
              </a>

              <a
                href="mailto:shaikhibatharunnum@gmail.com"
                className="w-9 h-9 rounded-full bg-[#080d1a] border border-cyan-500/30 text-cyan-400 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 hover:scale-110 transition-all shadow-md"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-slate-400">
              <button onClick={() => onNavigate('home')} className="hover:text-purple-400 transition-colors">Home</button>
              <span>•</span>
              <button onClick={() => onNavigate('about')} className="hover:text-purple-400 transition-colors">About</button>
              <span>•</span>
              <button onClick={() => onNavigate('skills')} className="hover:text-purple-400 transition-colors">Skills</button>
              <span>•</span>
              <button onClick={() => onNavigate('experience')} className="hover:text-purple-400 transition-colors">Experience</button>
              <span>•</span>
              <button onClick={() => onNavigate('projects')} className="hover:text-purple-400 transition-colors">Projects</button>
              <span>•</span>
              <button onClick={() => onNavigate('achievements')} className="hover:text-purple-400 transition-colors">Achievements</button>
              <span>•</span>
              <button onClick={() => onNavigate('certifications')} className="hover:text-purple-400 transition-colors">Certifications</button>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & CREDITS BAR */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>© 2026 Hiba Tharunnum Shaik. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Designed & Built with</span>
            <span className="text-purple-400">💜</span>
            <span>using</span>
            <span className="text-cyan-400 font-semibold flex items-center gap-1">
              <span>⚛️</span> React & <span>🌊</span> Tailwind CSS
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#080d1a] border border-purple-500/40 text-slate-300 hover:text-white hover:border-purple-400 hover:scale-110 transition-all flex items-center justify-center shrink-0 shadow-lg"
            title="Scroll to Top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </footer>
  );
};
