import React from 'react';
import {
  Code,
  Code2,
  Layout,
  Server,
  Database,
  Shield,
  Brain,
  Wrench,
  Rocket,
  Star,
  Lock,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  Globe,
  Settings
} from 'lucide-react';
import { TechLogo } from './TechLogos';

export const Skills: React.FC = () => {
  // Programming languages progress list
  const programmingLanguages = [
    { name: 'Python', percentage: 95, color: 'from-purple-500 to-indigo-500' },
    { name: 'JavaScript (ES6+)', percentage: 90, color: 'from-purple-500 to-cyan-500' },
    { name: 'TypeScript', percentage: 80, color: 'from-indigo-500 to-sky-400' },
    { name: 'C', percentage: 85, color: 'from-sky-400 to-blue-500' },
    { name: 'Java', percentage: 75, color: 'from-blue-500 to-indigo-500' },
    { name: 'SQL', percentage: 85, color: 'from-cyan-400 to-sky-500' },
  ];

  // Frontend Badges
  const frontendSkills = [
    { name: 'HTML5', bg: 'bg-orange-950/40 border-orange-500/30' },
    { name: 'CSS3', bg: 'bg-blue-950/40 border-blue-500/30' },
    { name: 'React.js', bg: 'bg-cyan-950/40 border-cyan-500/30' },
    { name: 'Tailwind CSS', bg: 'bg-sky-950/40 border-sky-500/30' },
    { name: 'JavaScript', bg: 'bg-amber-950/40 border-amber-500/30' },
    { name: 'TypeScript', bg: 'bg-blue-950/40 border-blue-500/30' },
    { name: 'Vite', bg: 'bg-purple-950/40 border-purple-500/30' },
    { name: 'Bootstrap', bg: 'bg-purple-950/40 border-purple-500/30' },
  ];

  // Backend Badges
  const backendSkills = [
    { name: 'Node.js', bg: 'bg-emerald-950/40 border-emerald-500/30' },
    { name: 'Express.js', bg: 'bg-slate-900 border-slate-700' },
    { name: 'Python', bg: 'bg-blue-950/40 border-blue-500/30' },
    { name: 'Flask', bg: 'bg-slate-900 border-slate-700' },
    { name: 'FastAPI', bg: 'bg-teal-950/40 border-teal-500/30' },
    { name: 'REST APIs', bg: 'bg-sky-950/40 border-sky-500/30' },
    { name: 'GraphQL', bg: 'bg-pink-950/40 border-pink-500/30' },
    { name: 'JWT', bg: 'bg-fuchsia-950/40 border-fuchsia-500/30' },
  ];

  // Database Badges
  const databaseSkills = [
    { name: 'MongoDB', bg: 'bg-emerald-950/40 border-emerald-500/30' },
    { name: 'PostgreSQL', bg: 'bg-blue-950/40 border-blue-500/30' },
    { name: 'MySQL', bg: 'bg-sky-950/40 border-sky-500/30' },
    { name: 'SQLite', bg: 'bg-indigo-950/40 border-indigo-500/30' },
  ];

  // Tools & Platforms
  const toolsList = [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Docker', icon: 'docker' },
    { name: 'MongoDB Compass', icon: 'mongodb compass' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Linux', icon: 'linux' },
    { name: 'Wireshark', icon: 'wireshark' },
    { name: 'Jupyter', icon: 'jupyter' },
    { name: 'Google Colab', icon: 'colab' },
    { name: 'Notion', icon: 'notion' },
  ];

  return (
    <section id="skills" className="py-20 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      {/* Background Circuit Ambient Glows */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER AREA: Title on Left, 3 Stat Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          
          {/* Header Left */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-bold text-purple-400 tracking-widest uppercase flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-purple-500"></span>
              <span>WHAT I KNOW</span>
              <span className="w-6 h-[1.5px] bg-purple-500"></span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              <span className="text-purple-400">My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                Skills
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              A comprehensive toolkit of technologies and skills I use to build secure, intelligent and scalable digital solutions.
            </p>
          </div>

          {/* Header Right: 3 Stat Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Stat Card 1 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-4 shadow-xl backdrop-blur-md flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center shrink-0">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">20+</div>
                <div className="text-xs text-slate-400 font-medium">Technologies Mastered</div>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-4 shadow-xl backdrop-blur-md flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">5+</div>
                <div className="text-xs text-slate-400 font-medium">Domains Covered</div>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-4 shadow-xl backdrop-blur-md flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center shrink-0">
                <Rocket className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">100%</div>
                <div className="text-xs text-slate-400 font-medium">Passion for Learning</div>
              </div>
            </div>

          </div>

        </div>

        {/* MAIN SKILLS GRID */}
        <div className="space-y-6">
          
          {/* TOP ROW: 4 CATEGORY BOXES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            
            {/* Box 1: Programming Languages (Progress bars) */}
            <div className="lg:col-span-3 rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-5 shadow-xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80 mb-4">
                  <Code className="w-5 h-5 text-purple-400" />
                  <h3 className="text-sm font-bold text-purple-300 tracking-tight">Programming Languages</h3>
                </div>

                <div className="space-y-3.5">
                  {programmingLanguages.map((lang, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-200 font-medium">{lang.name}</span>
                        <span className="text-slate-400 font-semibold">{lang.percentage}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-900 border border-slate-800/60 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${lang.color}`}
                          style={{ width: `${lang.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Box 2: Frontend Development (Badge Grid) */}
            <div className="lg:col-span-3 rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-5 shadow-xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80 mb-4">
                  <Layout className="w-5 h-5 text-purple-400" />
                  <h3 className="text-sm font-bold text-purple-300 tracking-tight">Frontend Development</h3>
                </div>

                <div className="grid grid-cols-4 gap-2.5">
                  {frontendSkills.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-1.5 group">
                      <div className={`w-11 h-11 rounded-xl ${item.bg} border flex items-center justify-center p-2.5 transition-transform group-hover:scale-105 shadow-md`}>
                        <TechLogo name={item.name} className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] text-slate-300 font-medium leading-tight">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Box 3: Backend Development (Badge Grid) */}
            <div className="lg:col-span-3 rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-5 shadow-xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80 mb-4">
                  <Server className="w-5 h-5 text-purple-400" />
                  <h3 className="text-sm font-bold text-purple-300 tracking-tight">Backend Development</h3>
                </div>

                <div className="grid grid-cols-4 gap-2.5">
                  {backendSkills.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-1.5 group">
                      <div className={`w-11 h-11 rounded-xl ${item.bg} border flex items-center justify-center p-2.5 transition-transform group-hover:scale-105 shadow-md`}>
                        <TechLogo name={item.name} className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] text-slate-300 font-medium leading-tight">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Box 4: Databases (2x2 Badge Grid) */}
            <div className="lg:col-span-3 rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-5 shadow-xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80 mb-4">
                  <Database className="w-5 h-5 text-purple-400" />
                  <h3 className="text-sm font-bold text-purple-300 tracking-tight">Databases</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  {databaseSkills.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-2 group">
                      <div className={`w-12 h-12 rounded-xl ${item.bg} border flex items-center justify-center p-2.5 transition-transform group-hover:scale-105 shadow-md`}>
                        <TechLogo name={item.name} className="w-7 h-7" />
                      </div>
                      <span className="text-xs text-slate-300 font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* MIDDLE ROW: 3 DOMAIN CARDS (Cybersecurity, AI/ML, Other Skills) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Cybersecurity */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-5 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80 mb-4">
                <Shield className="w-5 h-5 text-purple-400" />
                <h3 className="text-sm font-bold text-purple-300 tracking-tight">Cybersecurity</h3>
              </div>

              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Left Graphics */}
                <div className="col-span-4 flex justify-center">
                  <div className="relative w-16 h-16 rounded-full border border-purple-500/40 p-1 flex items-center justify-center bg-purple-950/20 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                    <div className="w-full h-full rounded-full border border-dashed border-purple-400/50 flex items-center justify-center animate-[spin_30s_linear_infinite]">
                    </div>
                    <Lock className="w-6 h-6 text-purple-400 absolute" />
                  </div>
                </div>

                {/* Right Bullet Points */}
                <div className="col-span-8 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                    <span>Ethical Hacking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                    <span>Vulnerability Assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                    <span>Network Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                    <span>Threat Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                    <span>Web Application Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                    <span>Encryption & Cryptography</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI / Machine Learning */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-5 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80 mb-4">
                <Brain className="w-5 h-5 text-purple-400" />
                <h3 className="text-sm font-bold text-purple-300 tracking-tight">AI / Machine Learning</h3>
              </div>

              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Left Graphics */}
                <div className="col-span-4 flex justify-center">
                  <div className="relative w-16 h-16 rounded-full border border-sky-500/40 p-1 flex items-center justify-center bg-sky-950/20 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                    <div className="w-full h-full rounded-full border border-dashed border-sky-400/50 flex items-center justify-center animate-[spin_25s_linear_infinite]">
                    </div>
                    <Brain className="w-6 h-6 text-sky-400 absolute" />
                  </div>
                </div>

                {/* Right Bullet Points */}
                <div className="col-span-8 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                    <span>Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                    <span>Natural Language Processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                    <span>Generative AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                    <span>AI Agents & LLMs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                    <span>Model Training & Evaluation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                    <span>Data Analysis & Visualization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Skills */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-5 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80 mb-4">
                <Star className="w-5 h-5 text-purple-400" />
                <h3 className="text-sm font-bold text-purple-300 tracking-tight">Other Skills</h3>
              </div>

              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Left Graphics */}
                <div className="col-span-4 flex justify-center">
                  <div className="relative w-16 h-16 rounded-full border border-indigo-500/40 p-1 flex items-center justify-center bg-indigo-950/20 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                    <div className="w-full h-full rounded-full border border-dashed border-indigo-400/50 flex items-center justify-center animate-[spin_35s_linear_infinite]">
                    </div>
                    <Code2 className="w-6 h-6 text-indigo-400 absolute" />
                  </div>
                </div>

                {/* Right Bullet Points */}
                <div className="col-span-8 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
                    <span>Data Structures & Algorithms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
                    <span>Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
                    <span>Operating Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
                    <span>Computer Networks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
                    <span>Software Engineering Principles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
                    <span>Git & Version Control</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM ROW: Tools & Platforms Bar */}
          <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-5 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80 mb-5">
              <Settings className="w-5 h-5 text-purple-400" />
              <h3 className="text-sm font-bold text-purple-300 tracking-tight">Tools & Platforms</h3>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-12 gap-4">
              {toolsList.map((tool, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 flex items-center justify-center p-2.5 transition-all group-hover:scale-110 shadow-md">
                    <TechLogo name={tool.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium text-center truncate w-full">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

