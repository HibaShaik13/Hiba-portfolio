import React from 'react';
import {
  Download,
  ArrowUpRight,
  Shield,
  Award,
  Trophy,
  Code,
  BrainCircuit,
} from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleDownloadResume = () => {
    const apiEndpoint = `${import.meta.env.VITE_API_BASE_URL || ''
      }/api/resume/download`;

    const link = document.createElement('a');
    link.href = apiEndpoint;
    link.download = 'Hiba_Tharunnum_Shaik_Resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-12 flex flex-col justify-center overflow-hidden bg-[#030712]"
    >
      {/* Background Radial Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[140px] pointer-events-none"></div>

      {/* PCB Circuit Line Decorative Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circuit Trace Lines */}
          <path
            d="M 80 180 H 220 V 380 H 380"
            stroke="#a855f7"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="6 6"
          />

          <path
            d="M 850 120 H 1050 V 300 H 1250"
            stroke="#38bdf8"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="6 6"
          />

          <path
            d="M 600 450 H 800 V 600"
            stroke="#a855f7"
            strokeWidth="1"
            fill="none"
          />

          {/* Circuit Nodes */}
          <circle
            cx="220"
            cy="380"
            r="3.5"
            fill="#c084fc"
          />

          <circle
            cx="1050"
            cy="300"
            r="3.5"
            fill="#38bdf8"
          />

          <circle
            cx="800"
            cy="600"
            r="3.5"
            fill="#38bdf8"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT COLUMN: Intro Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Eyebrow */}
            <div className="text-xs sm:text-sm font-bold text-[#c084fc] tracking-widest uppercase">
              HELLO, I'M
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight sm:leading-none flex flex-wrap items-center gap-x-3.5 gap-y-1">

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-fuchsia-400">
                Hiba
              </span>

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-sky-400 to-cyan-400">
                Tharunnum
              </span>

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                Shaik
              </span>

            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
              Full Stack Developer | Cybersecurity Enthusiast | AI Explorer
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Computer Science Engineering Student passionate about building
              secure, intelligent and scalable digital solutions at the
              intersection of Full Stack Development, AI and Cybersecurity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">

              {/* View Projects */}
              <button
                onClick={() => onNavigate('projects')}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#6366f1] to-[#3b82f6] hover:from-[#4f46e5] hover:to-[#2563eb] shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-200 active:scale-95"
              >
                <span>View My Projects</span>

                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Download Resume */}
              <a
                href="/Hiba_Tharunnum_Shaik_Resume.pdf"
                download="Hiba_Tharunnum_Shaik_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-[#0b0f19] border border-slate-700/80 hover:border-slate-500 hover:bg-slate-800/80 transition-all duration-200 active:scale-95"
              >
                <span>Download Resume</span>

                <Download className="w-4 h-4 text-slate-300" />
              </a>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative my-4">

            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">

              {/* Glowing Ambient Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-cyan-400/30 blur-3xl"></div>

              {/* 1. FLOATING CODE EDITOR CARD */}
              <div className="absolute -left-12 sm:-left-20 top-24 z-20 w-44 sm:w-48 p-3 rounded-2xl bg-[#090d1a]/90 border border-purple-500/40 shadow-2xl backdrop-blur-md">

                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80">

                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>

                  <span className="text-[10px] font-mono text-purple-300">
                    security.ts
                  </span>

                </div>

                <div className="font-mono text-[10px] space-y-1 text-slate-300 leading-tight">

                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-300">secure</span> ={' '}
                    <span className="text-emerald-400">true</span>;
                  </div>

                  <div className="text-slate-400">
                    system.protect();
                  </div>

                  <div>
                    <span className="text-indigo-300">encrypt</span>(data);
                  </div>

                  <div>
                    <span className="text-purple-400">return</span>{' '}
                    <span className="text-cyan-300">safe</span>;
                  </div>

                  <div className="text-emerald-400 pt-0.5">
                    // protected ✓
                  </div>

                </div>
              </div>

              {/* 2. CENTER PROFILE PHOTO WITH GLOWING TECH RING */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-[3px] bg-gradient-to-tr from-[#a855f7] via-[#6366f1] to-[#38bdf8] shadow-[0_0_50px_rgba(168,85,247,0.35)] flex items-center justify-center z-10">

                <div className="w-full h-full rounded-full overflow-hidden bg-[#030712] border-4 border-[#030712] relative">

                  {/* PROFILE IMAGE */}
                  <img
                    src="/profile_img.png"
                    alt="Hiba Tharunnum Shaik Profile"
                    className="w-full h-full object-cover object-top"
                  />

                </div>
              </div>

              {/* 3. FLOATING SHIELD CARD */}
              <div className="absolute -right-6 sm:-right-10 top-28 z-20 p-3 rounded-2xl bg-[#090d1a]/90 border border-cyan-500/40 shadow-2xl backdrop-blur-md flex items-center justify-center w-14 h-16 sm:w-16 sm:h-18">

                <div className="relative">

                  <Shield className="w-8 h-8 text-cyan-400" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-cyan-200">
                      🔒
                    </span>
                  </div>

                </div>
              </div>

              {/* 4. OPEN TO OPPORTUNITIES CARD */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 w-72 sm:w-80 px-4 py-3 rounded-2xl bg-[#090d19]/95 border border-slate-800 shadow-2xl flex items-center gap-3 backdrop-blur-md">

                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>

                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>

                <div className="text-xs">
                  <div className="font-bold text-white">
                    Open to Opportunities
                  </div>

                  <div className="text-[11px] text-slate-400">
                    Available for Internships & Full-time Roles
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="mt-14 pt-6 border-t border-slate-800/50 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Connect With Me */}
          <div className="lg:col-span-5 space-y-2">

            <span className="text-xs font-semibold text-slate-400">
              Connect with me
            </span>

            <div className="flex items-center gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/HibaShaik13"
                target="_blank"
                rel="noreferrer"
                title="GitHub Profile"
                className="w-11 h-11 rounded-xl bg-[#0c1220] border border-slate-800 hover:border-purple-500/60 flex items-center justify-center transition-all hover:scale-105 group"
              >
                <svg
                  className="w-5 h-5 fill-slate-200 group-hover:fill-white transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/hiba-tharunnum-shaik-60a33b393/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile"
                className="w-11 h-11 rounded-xl bg-[#0c1220] border border-slate-800 hover:border-blue-500/60 flex items-center justify-center transition-all hover:scale-105 group"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect
                    width="24"
                    height="24"
                    rx="4"
                    fill="#0A66C2"
                  />

                  <path
                    d="M5.1 8h2.8v10.5H5.1V8zm1.4-4c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6-1.6-.7-1.6-1.6.7-1.6 1.6-1.6zM10.2 8h2.7v1.4h.1c.4-.7 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v6H16.8v-5.3c0-1.3 0-2.9-1.8-2.9-1.8 0-2.1 1.4-2.1 2.8v5.4h-2.7V8z"
                    fill="#FFF"
                  />
                </svg>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/Shaik_Hiba/"
                target="_blank"
                rel="noreferrer"
                title="LeetCode Profile"
                className="w-11 h-11 rounded-xl bg-[#0c1220] border border-slate-800 hover:border-amber-500/60 flex items-center justify-center transition-all hover:scale-105 group"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#FFA116"
                    d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226a1.374 1.374 0 0 0-.004 1.924 1.376 1.376 0 0 0 1.928.006l5.406-5.789a.374.374 0 0 1 .517 0l2.35 2.518a1.376 1.376 0 0 0 2.01-1.879L16.97.438A1.374 1.374 0 0 0 13.483 0zm-8.89 6.273a1.374 1.374 0 0 0-1.374 1.374v8.706a1.374 1.374 0 0 0 1.374 1.374h8.706a1.374 1.374 0 0 0 1.374-1.374v-2.022a1.376 1.376 0 0 0-2.752 0v.648H6.571V8.999h2.385a1.376 1.376 0 0 0 0-2.752H4.593z"
                  />

                  <path
                    fill="#FFF"
                    d="M12.923 11.232a1.376 1.376 0 0 0-1.928-.006l-2.616 2.723a1.374 1.374 0 0 0 0 1.924l2.616 2.723a1.376 1.376 0 0 0 1.928-.006 1.376 1.376 0 0 0 .006-1.928l-1.688-1.757 1.688-1.757a1.376 1.376 0 0 0-.006-1.916z"
                  />
                </svg>
              </a>

              {/* CodeChef */}
              <a
                href="https://www.codechef.com/users/vu241fa04495"
                target="_blank"
                rel="noreferrer"
                title="CodeChef Profile"
                className="w-11 h-11 rounded-xl bg-[#0c1220] border border-slate-800 hover:border-amber-600/60 flex items-center justify-center transition-all hover:scale-105 group"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="#D0A85C"
                >
                  <path d="M12 2C9.5 2 7.5 3.5 7 5.5C5.5 5.5 4 6.5 4 8.5C4 9.8 4.7 10.9 5.8 11.5C5.3 12.3 5 13.2 5 14.2C5 17.4 8.1 20 12 20C15.9 20 19 17.4 19 14.2C19 13.2 18.7 12.3 18.2 11.5C19.3 10.9 20 9.8 20 8.5C20 6.5 18.5 5.5 17 5.5C16.5 3.5 14.5 2 12 2ZM12 4C13.7 4 15.1 5 15.4 6.5L15.6 7.5H16.6C17.5 7.5 18 8 18 8.5C18 9 17.5 9.5 16.6 9.5H15.8L15.3 10.2C16.3 11.2 17 12.6 17 14.2C17 16.3 14.8 18 12 18C9.2 18 7 16.3 7 14.2C7 12.6 7.7 11.2 8.7 10.2L8.2 9.5H7.4C6.5 9.5 6 9 6 8.5C6 8 6.5 7.5 7.4 7.5H8.4L8.6 6.5C8.9 5 10.3 4 12 4Z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:shaikhibatharunnum@gmail.com"
                title="Send Email"
                className="w-11 h-11 rounded-xl bg-[#0c1220] border border-slate-800 hover:border-cyan-500/60 flex items-center justify-center transition-all hover:scale-105 group"
              >
                <svg
                  className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="3"
                  />

                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>

            </div>
          </div>

          {/* Stats Box */}
          <div className="lg:col-span-7 rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 sm:p-4 shadow-xl backdrop-blur-md">

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">

              {/* Projects */}
              <div className="flex items-center gap-3 justify-center sm:justify-start pt-2 sm:pt-0 sm:px-3">

                <Code className="w-5 h-5 text-purple-400 shrink-0" />

                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#c084fc]">
                    10+
                  </div>

                  <div className="text-[11px] text-slate-400 font-medium whitespace-nowrap">
                    Projects Built
                  </div>
                </div>

              </div>

              {/* Certifications */}
              <div className="flex items-center gap-3 justify-center sm:justify-start pt-2 sm:pt-0 sm:px-3">

                <Award className="w-5 h-5 text-purple-400 shrink-0" />

                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#c084fc]">
                    12+
                  </div>

                  <div className="text-[11px] text-slate-400 font-medium whitespace-nowrap">
                    Certifications
                  </div>
                </div>

              </div>

              {/* DSA Problems */}
              <div className="flex items-center gap-3 justify-center sm:justify-start pt-2 sm:pt-0 sm:px-3">

                <BrainCircuit className="w-5 h-5 text-purple-400 shrink-0" />

                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#c084fc]">
                    200+
                  </div>

                  <div className="text-[11px] text-slate-400 font-medium whitespace-nowrap">
                    DSA Problems
                  </div>
                </div>

              </div>

              {/* Hackathons */}
              <div className="flex items-center gap-3 justify-center sm:justify-start pt-2 sm:pt-0 sm:px-3">

                <Trophy className="w-5 h-5 text-cyan-400 shrink-0" />

                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#38bdf8]">
                    5+
                  </div>

                  <div className="text-[11px] text-slate-400 font-medium whitespace-nowrap">
                    Hackathons
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Mouse Scroll Pill Indicator */}
        <div className="mt-10 flex justify-center">

          <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-1">

            <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce mt-1"></div>

          </div>

        </div>

      </div>
    </section>
  );
};