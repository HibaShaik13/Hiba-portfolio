import React from 'react';
import {
  Trophy,
  Award,
  Medal,
  Target,
  Sparkles,
  Star,
  Rocket,
  Shield,
  Code2,
  FileCheck,
  Users,
  Building2,
  Calendar,
  Brain,
  ArrowRight
} from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievementsList = [
    {
      badge: '1st',
      badgeStyle: 'bg-amber-950/80 border-amber-500/50 text-amber-400',
      title: 'Winner - InnoVent Hackathon',
      desc: 'Developed SentinelDrive – Edge AI based Automotive Cybersecurity platform and secured 1st place.',
      org: 'Tata Technologies',
      date: 'June 2026',
      iconType: 'trophy',
      glowColor: 'from-purple-600/20 to-indigo-600/20',
      borderColor: 'group-hover:border-amber-500/40'
    },
    {
      badge: 'Top 10',
      badgeStyle: 'bg-cyan-950/80 border-cyan-500/50 text-cyan-400',
      title: 'Top 10 – CodeSprint Hack 2026',
      desc: 'Built an AI powered research automation system using multi-agent architecture.',
      org: 'Techfest, IIT Bombay',
      date: 'April 2026',
      iconType: 'rocket',
      glowColor: 'from-cyan-600/20 to-blue-600/20',
      borderColor: 'group-hover:border-cyan-500/40'
    },
    {
      badge: 'Runner Up',
      badgeStyle: 'bg-indigo-950/80 border-indigo-500/50 text-indigo-400',
      title: 'Runner Up – CyberShield CTF',
      desc: 'Secured 2nd position in Capture The Flag competition focusing on web & network security.',
      org: 'CyberShield India',
      date: 'Jan 2026',
      iconType: 'shield',
      glowColor: 'from-indigo-600/20 to-purple-600/20',
      borderColor: 'group-hover:border-indigo-500/40'
    },
    {
      badge: 'Top 5%',
      badgeStyle: 'bg-blue-950/80 border-blue-500/50 text-blue-400',
      title: 'Top 5% – GFG Solutionist',
      desc: 'Among top 5% of GeeksforGeeks users for consistent problem solving and contributions.',
      org: 'GeeksforGeeks',
      date: 'Dec 2025',
      iconType: 'code',
      glowColor: 'from-blue-600/20 to-sky-600/20',
      borderColor: 'group-hover:border-blue-500/40'
    },
    {
      badge: 'Excellence',
      badgeStyle: 'bg-purple-950/80 border-purple-500/50 text-purple-400',
      title: 'Excellence in Academics',
      desc: 'Recognized for excellent academic performance and consistent dedication.',
      org: 'GMRIT, Rajam',
      date: 'Nov 2025',
      iconType: 'certificate',
      glowColor: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'group-hover:border-purple-500/40'
    },
    {
      badge: 'Participant',
      badgeStyle: 'bg-teal-950/80 border-teal-500/50 text-teal-400',
      title: 'Multiple Hackathons',
      desc: 'Actively participated in 5+ hackathons across domains like AI, Cybersecurity & Web Dev.',
      org: 'Various Platforms',
      date: '2024 – 2026',
      iconType: 'users',
      glowColor: 'from-teal-600/20 to-emerald-600/20',
      borderColor: 'group-hover:border-teal-500/40'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP HEADER: Title on Left, 4 Stat Cards + Trophy Graphic on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          
          {/* Header Left */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold text-purple-400 tracking-widest uppercase flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-purple-500"></span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>MY ACHIEVEMENTS</span>
              <span className="w-5 h-[1.5px] bg-purple-500"></span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Milestones{' '}
              </span>
              <span className="text-white">That </span>
              <br className="hidden sm:inline" />
              <span className="text-white">Define My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                Journey
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Every achievement is a step forward. These milestones motivate me to keep learning, building and creating impact.
            </p>
          </div>

          {/* Header Right: 4 Stat Cards + Trophy Art */}
          <div className="lg:col-span-7 flex flex-col md:flex-row items-center gap-4">
            
            {/* 4 Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-3.5 w-full md:w-3/5">
              
              {/* Stat 1 */}
              <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1">
                <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-xl font-extrabold text-white">5+</div>
                <div className="text-[11px] text-slate-400 font-medium leading-tight">Hackathons Participated</div>
              </div>

              {/* Stat 2 */}
              <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Trophy className="w-4 h-4" />
                </div>
                <div className="text-xl font-extrabold text-cyan-400">3</div>
                <div className="text-[11px] text-slate-400 font-medium leading-tight">Projects Recognized</div>
              </div>

              {/* Stat 3 */}
              <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1">
                <div className="w-9 h-9 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Medal className="w-4 h-4" />
                </div>
                <div className="text-xl font-extrabold text-white">12+</div>
                <div className="text-[11px] text-slate-400 font-medium leading-tight">Certifications Earned</div>
              </div>

              {/* Stat 4 */}
              <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1">
                <div className="w-9 h-9 rounded-xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Target className="w-4 h-4" />
                </div>
                <div className="text-xl font-extrabold text-cyan-400">200+</div>
                <div className="text-[11px] text-slate-400 font-medium leading-tight">DSA Problems Solved</div>
              </div>

            </div>

            {/* Glowing 3D Trophy Art Box */}
            <div className="w-full md:w-2/5 h-44 rounded-2xl bg-gradient-to-br from-purple-950/40 via-[#080d1a] to-cyan-950/40 border border-purple-500/30 p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl group">
              {/* Background Neon Rings */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0,transparent_70%)] pointer-events-none"></div>
              
              {/* Glowing Pedestal SVG Illustration */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl animate-pulse"></div>
                  <Trophy className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-transform group-hover:scale-110 duration-300" />
                </div>
                {/* Pedestal Base Lines */}
                <div className="w-24 h-2 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-indigo-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                <div className="w-32 h-1 rounded-full bg-slate-800"></div>
              </div>
            </div>

          </div>

        </div>

        {/* SECTION SUB-HEADER */}
        <div className="flex items-center gap-2 mb-8 text-purple-300 font-bold text-lg">
          <Star className="w-5 h-5 text-purple-400 fill-purple-400/20" />
          <span>Highlights & Recognitions</span>
        </div>

        {/* 6 CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-14">
          {achievementsList.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-4 shadow-xl backdrop-blur-md flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 ${item.borderColor}`}
            >
              <div>
                {/* Top Badge */}
                <div className="flex justify-start mb-3">
                  <span className={`px-2.5 py-0.5 rounded-md border text-[10px] font-extrabold tracking-wide ${item.badgeStyle}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Center Vector Icon Graphic Box */}
                <div className="w-full h-32 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-4 flex items-center justify-center relative overflow-hidden group-hover:border-purple-500/30 transition-colors">
                  <div className={`absolute inset-0 bg-gradient-to-b ${item.glowColor} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                  
                  {/* Icon Selection */}
                  {item.iconType === 'trophy' && (
                    <div className="relative flex flex-col items-center">
                      <Trophy className="w-12 h-12 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)] group-hover:scale-110 transition-transform" />
                      <div className="w-10 h-1 bg-amber-400/30 rounded-full mt-1 blur-xs"></div>
                    </div>
                  )}

                  {item.iconType === 'rocket' && (
                    <div className="relative flex flex-col items-center">
                      <Rocket className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] group-hover:scale-110 transition-transform -rotate-12" />
                      <div className="w-8 h-1 bg-cyan-400/30 rounded-full mt-1 blur-xs"></div>
                    </div>
                  )}

                  {item.iconType === 'shield' && (
                    <div className="relative flex flex-col items-center">
                      <Shield className="w-12 h-12 text-indigo-400 drop-shadow-[0_0_12px_rgba(129,140,248,0.6)] group-hover:scale-110 transition-transform" />
                      <div className="w-8 h-1 bg-indigo-400/30 rounded-full mt-1 blur-xs"></div>
                    </div>
                  )}

                  {item.iconType === 'code' && (
                    <div className="relative flex flex-col items-center">
                      <Code2 className="w-12 h-12 text-blue-400 drop-shadow-[0_0_12px_rgba(96,165,250,0.6)] group-hover:scale-110 transition-transform" />
                      <div className="w-8 h-1 bg-blue-400/30 rounded-full mt-1 blur-xs"></div>
                    </div>
                  )}

                  {item.iconType === 'certificate' && (
                    <div className="relative flex flex-col items-center">
                      <FileCheck className="w-12 h-12 text-purple-400 drop-shadow-[0_0_12px_rgba(192,132,252,0.6)] group-hover:scale-110 transition-transform" />
                      <div className="w-8 h-1 bg-purple-400/30 rounded-full mt-1 blur-xs"></div>
                    </div>
                  )}

                  {item.iconType === 'users' && (
                    <div className="relative flex flex-col items-center">
                      <Users className="w-12 h-12 text-teal-400 drop-shadow-[0_0_12px_rgba(45,212,191,0.6)] group-hover:scale-110 transition-transform" />
                      <div className="w-8 h-1 bg-teal-400/30 rounded-full mt-1 blur-xs"></div>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors mb-1.5 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Info: Institution & Date */}
              <div className="pt-3 border-t border-slate-800/80 space-y-1 text-[10px] text-slate-400">
                <div className="flex items-center gap-1.5 truncate">
                  <Building2 className="w-3 h-3 text-purple-400 shrink-0" />
                  <span className="truncate">{item.org}</span>
                </div>
                <div className="flex items-center gap-1.5 truncate">
                  <Calendar className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>{item.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM PROCESS / MINDSET BANNER */}
        <div className="rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#080d1a] to-cyan-950/40 border border-purple-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Banner Left Text */}
          <div className="lg:col-span-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center shrink-0 text-purple-400 shadow-lg">
              <Target className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-base font-bold text-white">Always Striving for More</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                I believe achievements are not just about rewards, but about the{' '}
                <span className="text-cyan-400 font-semibold">knowledge</span> gained, the{' '}
                <span className="text-purple-400 font-semibold">impact</span> created, and the{' '}
                <span className="text-blue-400 font-semibold">people</span> we help along the way.
              </p>
            </div>
          </div>

          {/* Banner Right: 4 Workflow Step Nodes */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800/80">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-1 group">
              <div className="w-10 h-10 rounded-full bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-lg group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-white">Set Goals</div>
              <div className="text-[10px] text-slate-400 max-w-[100px]">Dream big and plan your path.</div>
            </div>

            <ArrowRight className="w-4 h-4 text-purple-400 hidden sm:block shrink-0" />

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-1 group">
              <div className="w-10 h-10 rounded-full bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-lg group-hover:scale-110 transition-transform">
                <Brain className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-white">Learn & Build</div>
              <div className="text-[10px] text-slate-400 max-w-[100px]">Gain skills and build meaningful projects.</div>
            </div>

            <ArrowRight className="w-4 h-4 text-cyan-400 hidden sm:block shrink-0" />

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-1 group">
              <div className="w-10 h-10 rounded-full bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-lg group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-white">Solve & Innovate</div>
              <div className="text-[10px] text-slate-400 max-w-[100px]">Solve real-world problems with creative solutions.</div>
            </div>

            <ArrowRight className="w-4 h-4 text-indigo-400 hidden sm:block shrink-0" />

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center space-y-1 group">
              <div className="w-10 h-10 rounded-full bg-teal-950/80 border border-teal-500/40 flex items-center justify-center text-teal-400 shadow-lg group-hover:scale-110 transition-transform">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-white">Achieve Impact</div>
              <div className="text-[10px] text-slate-400 max-w-[100px]">Create impact and inspire others to grow.</div>
            </div>

            <ArrowRight className="w-4 h-4 text-teal-400 hidden sm:block shrink-0" />

          </div>

        </div>

      </div>
    </section>
  );
};
