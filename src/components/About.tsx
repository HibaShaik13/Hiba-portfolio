import React from 'react';

import {
  Code,
  ShieldCheck,
  Brain,
  Rocket,
  GraduationCap,
  Target,
  ChevronRight,
  Shield,
  Cpu,
} from 'lucide-react';

export const About: React.FC = () => {
  const featureCards = [
    {
      title: 'Passionate Developer',
      desc: 'I build clean, efficient and user-friendly web applications.',
      icon: Code,
      iconColor: 'text-purple-400',
      iconBg: 'bg-purple-950/60 border-purple-500/30',
      lineColor: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Security Focused',
      desc: 'I focus on building secure systems and exploring cybersecurity.',
      icon: Shield,
      iconColor: 'text-cyan-400',
      iconBg: 'bg-cyan-950/60 border-cyan-500/30',
      lineColor: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'AI Enthusiast',
      desc: 'Exploring AI/ML and building intelligent solutions.',
      icon: Brain,
      iconColor: 'text-sky-400',
      iconBg: 'bg-sky-950/60 border-sky-500/30',
      lineColor: 'from-sky-500 to-indigo-500',
    },
    {
      title: 'Always Learning',
      desc: 'Always curious, always learning and always improving.',
      icon: Rocket,
      iconColor: 'text-purple-300',
      iconBg: 'bg-purple-950/60 border-purple-500/30',
      lineColor: 'from-purple-500 to-fuchsia-500',
    },
  ];

  const journeySteps = [
    {
      title: 'CSE Student',
      desc: 'Strong foundation in Computer Science Engineering.',
      icon: GraduationCap,
      color: 'text-purple-400 border-purple-500/40 bg-purple-950/60',
    },
    {
      title: 'Started Coding',
      desc: 'Began my coding journey and discovered my love for development.',
      icon: Code,
      color: 'text-indigo-400 border-indigo-500/40 bg-indigo-950/60',
    },
    {
      title: 'Explored Cybersecurity',
      desc: 'Dived into cybersecurity and ethical hacking domains.',
      icon: ShieldCheck,
      color: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/60',
    },
    {
      title: 'AI & Full Stack',
      desc: 'Combining Full Stack Development with AI to build smart apps.',
      icon: Cpu,
      color: 'text-purple-400 border-purple-500/40 bg-purple-950/60',
    },
    {
      title: 'Future Goals',
      desc: 'To become a skilled tech professional and create real-world impact.',
      icon: Target,
      color: 'text-purple-300 border-purple-500/40 bg-purple-950/60',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-[#030712] relative overflow-hidden border-t border-slate-900"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-900/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* TOP MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-6">

            {/* Circular Profile Ring Container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">

              {/* Outer PCB Trace Ring */}
              <div className="absolute -inset-4 rounded-full border border-purple-500/20 p-2">
                <div className="w-full h-full rounded-full border border-dashed border-cyan-400/25 animate-[spin_80s_linear_infinite]"></div>
              </div>

              {/* Glowing Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-cyan-400/30 blur-2xl"></div>

              {/* Profile Image with Neon Ring */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-[3px] bg-gradient-to-tr from-[#a855f7] via-[#6366f1] to-[#38bdf8] shadow-[0_0_40px_rgba(168,85,247,0.3)] flex items-center justify-center">

                <div className="w-full h-full rounded-full overflow-hidden bg-[#030712] border-4 border-[#030712]">

                  {/* DIRECT PROFILE IMAGE */}
                  <img
                    src="/profile_img.png"
                    alt="Hiba Tharunnum Shaik Profile"
                    className="w-full h-full object-cover object-top"
                  />

                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="w-full max-w-sm rounded-2xl bg-[#080d1a]/80 border border-slate-800/90 p-5 shadow-xl backdrop-blur-md relative">

              <div className="flex items-start gap-3">

                <span className="text-3xl font-serif text-purple-400 leading-none select-none">
                  “
                </span>

                <div className="space-y-2">

                  <p className="text-xs sm:text-sm text-slate-200 italic font-medium leading-relaxed">
                    Building secure and intelligent solutions that make a real impact.
                  </p>

                  <div className="text-xs text-purple-400 font-semibold tracking-wide">
                    — Hiba Shaik
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 space-y-6">

            {/* Eyebrow */}
            <div className="text-xs font-bold text-purple-400 tracking-widest uppercase flex items-center gap-2">

              <span className="w-6 h-[1.5px] bg-purple-500"></span>

              <span>ABOUT ME</span>

              <span className="w-6 h-[1.5px] bg-purple-500"></span>

            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">

              Driven by{' '}

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-fuchsia-400">
                Curiosity.
              </span>

              <br />

              Committed to{' '}

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                Impact.
              </span>

            </h2>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">

              <p>
                I'm Hiba Tharunnum Shaik, a Computer Science Engineering student
                with a passion for creating secure, scalable and intelligent
                digital experiences. I enjoy working at the intersection of Full
                Stack Development, Cybersecurity and Artificial Intelligence to
                solve real-world problems.
              </p>

              <p>
                I love turning ideas into impactful solutions, learning new
                technologies and constantly challenging myself to grow as a
                developer and problem solver.
              </p>

            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">

              {featureCards.map((card, idx) => {
                const IconComp = card.icon;

                return (
                  <div
                    key={idx}
                    className="group relative rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-4 shadow-xl backdrop-blur-md flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
                  >

                    <div className="space-y-3">

                      <div
                        className={`w-10 h-10 rounded-xl ${card.iconBg} border flex items-center justify-center shrink-0`}
                      >
                        <IconComp
                          className={`w-5 h-5 ${card.iconColor}`}
                        />
                      </div>

                      <h3 className="text-sm font-bold text-white tracking-tight">
                        {card.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {card.desc}
                      </p>

                    </div>

                    {/* Bottom Accent Glow Line */}
                    <div
                      className={`mt-4 h-0.5 w-full rounded-full bg-gradient-to-r ${card.lineColor} opacity-70 group-hover:opacity-100 transition-opacity`}
                    ></div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: My Journey */}
        <div className="mt-16 rounded-3xl bg-[#080d1a]/90 border border-slate-800/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">

          {/* Section Header */}
          <div className="text-xs font-bold text-cyan-400 tracking-widest uppercase flex items-center gap-2 mb-8">

            <span className="w-6 h-[1.5px] bg-cyan-500"></span>

            <span>My Journey So Far</span>

            <span className="w-6 h-[1.5px] bg-cyan-500"></span>

          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Desktop Horizontal Connecting Line */}
            <div className="hidden md:block absolute top-7 left-8 right-8 h-[2px] bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-500/30 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative z-10">

              {journeySteps.map((step, idx) => {
                const IconComp = step.icon;

                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center space-y-3 group"
                  >

                    {/* Circle Node */}
                    <div
                      className={`w-14 h-14 rounded-2xl ${step.color} border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 z-10`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    {/* Step Title */}
                    <h4 className="text-sm font-bold text-white tracking-tight pt-1">
                      {step.title}
                    </h4>

                    {/* Step Description */}
                    <p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">
                      {step.desc}
                    </p>

                  </div>
                );
              })}

            </div>

            {/* Right Arrow */}
            <div className="hidden md:flex absolute top-5 right-2 text-purple-400">
              <ChevronRight className="w-5 h-5 animate-pulse" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};