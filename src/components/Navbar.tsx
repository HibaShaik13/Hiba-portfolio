import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    window.open('/api/resume/download', '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Hexagon HS + HIBA SHAIK */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
              <polygon
                points="20,2 37,11 37,29 20,38 3,29 3,11"
                stroke="#38BDF8"
                strokeWidth="2"
                fill="#050b18"
              />
              <text
                x="20"
                y="24.5"
                textAnchor="middle"
                fill="#38BDF8"
                fontSize="13"
                fontWeight="800"
                fontFamily="sans-serif"
                letterSpacing="0.5"
              >
                HS
              </text>
            </svg>
          </div>
          <span className="font-extrabold text-sm sm:text-base tracking-wider text-white group-hover:text-cyan-400 transition-colors">
            HIBA THARUNNUM SHAIK
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-purple-300 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full shadow-[0_0_8px_#a855f7]"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Top Right Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Hiba_Tharunnum_Shaik_Resume.pdf"
            download="Hiba_Tharunnum_Shaik_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-[#0a0f1d] border border-purple-500/40 hover:border-purple-400 hover:bg-purple-950/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-200 active:scale-95"
          >
            <span>Resume</span>
            <Download className="w-3.5 h-3.5 text-slate-200" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030712]/95 border-b border-purple-500/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-3 animate-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 font-semibold'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <a
              href="/Hiba_Tharunnum_Shaik_Resume.pdf"
              download="Hiba_Tharunnum_Shaik_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-md shadow-purple-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
