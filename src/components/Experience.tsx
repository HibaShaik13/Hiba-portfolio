import React from 'react';
import {
  Briefcase,
  Calendar,
  Building2,
  Shield,
  Code2,
  Users,
  Clock,
  Sparkles,
  MapPin,
  Star,
  Brain,
  BarChart3,
  Settings,
  GraduationCap,
  Lock
} from 'lucide-react';
import { TechLogo } from './TechLogos';

export const Experience: React.FC = () => {
  const toolsUsed = [
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    'Flask',
    'MongoDB',
    'Git',
    'GitHub',
    'Postman',
    'Wireshark',
    'Docker',
    'VS Code'
  ];

  return (
    <section id="experience" className="py-20 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP HEADER: Title on Left, 4 Stat Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Header Left */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-bold text-purple-400 tracking-widest uppercase flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-purple-500"></span>
              <span>MY EXPERIENCE</span>
              <span className="w-5 h-[1.5px] bg-purple-500"></span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Experience{' '}
              </span>
              <span className="text-white">That Shapes </span>
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                My Journey
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Learning, building and growing through real-world challenges and impactful contributions.
            </p>
          </div>

          {/* Header Right: 4 Stat Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            
            {/* Stat 1 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1">
              <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-xl font-extrabold text-white">1+</div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">Internship Experience</div>
            </div>

            {/* Stat 2 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-xl font-extrabold text-white">5+</div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">Projects Delivered</div>
            </div>

            {/* Stat 3 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-xl font-extrabold text-white">100+</div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">Hours of Hands-on Work</div>
            </div>

            {/* Stat 4 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1">
              <div className="w-10 h-10 rounded-xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-xs font-extrabold text-white">Cybersecurity</div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">Hands-on Exposure</div>
            </div>

          </div>

        </div>

        {/* MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Experience Timeline Cards (8 Cols) */}
          <div className="lg:col-span-8 space-y-8 relative">
            
            {/* Vertical Connecting Line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-slate-800 hidden sm:block"></div>

            {/* CARD 1: Cybersecurity Intern at Prodigy Infotech */}
            <div className="relative sm:pl-16">
              
              {/* Timeline Dot Icon */}
              <div className="absolute left-2.5 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-[#080d1a] border-2 border-purple-500 hidden sm:flex items-center justify-center text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.5)]">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-6 sm:p-7 shadow-xl backdrop-blur-md space-y-4 hover:border-purple-500/40 transition-all">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-4">
                    {/* Company Logo Badge */}
                    <div className="w-14 h-14 rounded-full bg-slate-900 border border-purple-500/30 p-1 flex items-center justify-center shrink-0 shadow-inner">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-950 to-slate-900 flex flex-col items-center justify-center text-center p-1">
                        <span className="text-[9px] font-black tracking-tighter text-blue-400 leading-none uppercase">Prodigy</span>
                        <span className="text-[7px] text-slate-400 leading-none">INFOTECH</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">Cybersecurity Intern</h3>
                      <div className="text-sm font-semibold text-purple-400">Prodigy Infotech</div>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Jan 2025 – Mar 2025</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-purple-400" />
                          <span>Remote</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="self-start sm:self-center">
                    <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-extrabold tracking-widest uppercase shadow-md">
                      COMPLETED
                    </span>
                  </div>
                </div>

                {/* Summary Paragraph */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Worked on real-world cybersecurity tasks including vulnerability assessment, network analysis, and secure coding practices under the guidance of industry experts.
                </p>

                {/* Key Contributions */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold text-purple-300">Key Contributions:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5"></span>
                      <span>Performed vulnerability scanning and security assessment</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5"></span>
                      <span>Built File Encryption & Decryption Tool</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5"></span>
                      <span>Analyzed network traffic and identified potential threats</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5"></span>
                      <span>Developed Network Packet Analyzer</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5"></span>
                      <span>Implemented encryption algorithms for data security</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5"></span>
                      <span>Followed secure coding and OWASP best practices</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* CARD 2: AI & Full Stack Developer (Self Initiated) */}
            <div className="relative sm:pl-16">
              
              {/* Timeline Dot Icon */}
              <div className="absolute left-2.5 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-[#080d1a] border-2 border-indigo-500 hidden sm:flex items-center justify-center text-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.5)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-6 sm:p-7 shadow-xl backdrop-blur-md space-y-4 hover:border-indigo-500/40 transition-all">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-4">
                    {/* Logo Badge */}
                    <div className="w-14 h-14 rounded-full bg-indigo-950/60 border border-indigo-500/40 p-1 flex items-center justify-center shrink-0 shadow-lg">
                      <GraduationCap className="w-7 h-7 text-indigo-400" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">AI & Full Stack Developer (Learning Projects)</h3>
                      <div className="text-sm font-semibold text-purple-400">Self Initiated</div>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>2024 – Present</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-purple-400" />
                          <span>Remote</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="self-start sm:self-center">
                    <span className="px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-400 text-[10px] font-extrabold tracking-widest uppercase shadow-md">
                      ONGOING
                    </span>
                  </div>
                </div>

                {/* Summary Paragraph */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Building full stack applications and AI based solutions. Continuously exploring new technologies and working on real-world projects to strengthen my development and problem-solving skills.
                </p>

                {/* Key Contributions */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold text-purple-300">Key Contributions:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5"></span>
                      <span>Built Full Stack web applications using MERN & Flask</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5"></span>
                      <span>Created AI Research Agent for automation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5"></span>
                      <span>Developed multi-agent AI applications</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5"></span>
                      <span>Built secure web apps with authentication</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5"></span>
                      <span>Integrated LLMs & APIs for intelligent automation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5"></span>
                      <span>Deployed and maintained projects</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: 3 Widgets (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Widget 1: Experience Highlights */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-5 shadow-xl backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800/80 text-purple-300 text-sm font-bold">
                <Star className="w-4 h-4 text-purple-400" />
                <span>Experience Highlights</span>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center shrink-0 text-purple-400">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-300 leading-snug">Hands-on experience in cybersecurity tools and techniques</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-300 leading-snug">Built and deployed real-world applications</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center shrink-0 text-indigo-400">
                    <Brain className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-300 leading-snug">Explored AI/ML models and agent systems</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center shrink-0 text-sky-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-300 leading-snug">Collaborated, learned and solved real-world problems</span>
                </div>
              </div>
            </div>

            {/* Widget 2: Core Skills Gained */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-5 shadow-xl backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800/80 text-purple-300 text-sm font-bold">
                <BarChart3 className="w-4 h-4 text-purple-400" />
                <span>Core Skills Gained</span>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'Cybersecurity', pct: 90 },
                  { name: 'Web Development', pct: 90 },
                  { name: 'Python Programming', pct: 85 },
                  { name: 'AI / Machine Learning', pct: 80 },
                  { name: 'Problem Solving', pct: 90 },
                ].map((skill, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 font-semibold">{skill.pct}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                        style={{ width: `${skill.pct}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 3: Tools & Technologies Used */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-5 shadow-xl backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800/80 text-purple-300 text-sm font-bold">
                <Settings className="w-4 h-4 text-purple-400" />
                <span>Tools & Technologies Used</span>
              </div>

              <div className="grid grid-cols-6 gap-2.5">
                {toolsUsed.map((tool, idx) => (
                  <div
                    key={idx}
                    title={tool}
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 flex items-center justify-center p-2 transition-all hover:scale-110 shadow-md group cursor-pointer"
                  >
                    <TechLogo name={tool} className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
