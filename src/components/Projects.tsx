import React, { useState } from 'react';
import {
  Package,
  Code2,
  Trophy,
  Rocket,
  ArrowUpRight,
  Github,
  ArrowRight,
  Sparkles,
  Layers,
  Shield,
  Brain,
  Wrench
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../../backend/data/portfolioData';
import { getProjectImage } from '../utils/images';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Projects');

  const categories = ['All Projects', 'Full Stack', 'AI / ML', 'Cybersecurity', 'Web Apps', 'Tools'];

  // Map category names safely
  const filterProject = (p: Project) => {
    if (activeCategory === 'All Projects') return true;
    if (activeCategory === 'AI / ML' && (p.category === 'AI' || p.category.includes('AI'))) return true;
    if (activeCategory === 'Full Stack' && (p.category === 'Full Stack' || p.tech.includes('React'))) return true;
    if (activeCategory === 'Cybersecurity' && p.category === 'Cybersecurity') return true;
    if (activeCategory === 'Web Apps' && (p.category === 'Full Stack' || p.category === 'Tools')) return true;
    if (activeCategory === 'Tools' && p.category === 'Tools') return true;
    return p.category.toLowerCase() === activeCategory.toLowerCase();
  };

  const filteredProjects = PORTFOLIO_DATA.projects.filter(filterProject);

  return (
    <section id="projects" className="py-20 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP HEADER: Title on Left, 4 Stat Boxes on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Left Title Area */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-bold text-purple-400 tracking-widest uppercase flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-purple-500"></span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>MY WORK</span>
              <span className="w-5 h-[1.5px] bg-purple-500"></span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Featured 
              </span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                Projects
              </span>
            </h2>

            {/* Glowing Accent Bar */}
            <div className="flex items-center gap-1.5 pt-1">
              <div className="w-8 h-1 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
              <div className="w-12 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
              <div className="w-3 h-1 rounded-full bg-slate-700"></div>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              A collection of projects that showcase my passion for building secure, intelligent and impactful digital solutions.
            </p>
          </div>

          {/* Right 4 Stat Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            
            {/* Stat 1 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1 group hover:border-purple-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Package className="w-5 h-5" />
              </div>
              <div className="text-xl font-extrabold text-white">10+</div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">Projects Built</div>
            </div>

            {/* Stat 2 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1 group hover:border-cyan-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-xl font-extrabold text-white">5+</div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">Technologies Explored</div>
            </div>

            {/* Stat 3 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1 group hover:border-indigo-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-xl font-extrabold text-white">3+</div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">Hackathon Projects</div>
            </div>

            {/* Stat 4 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1 group hover:border-sky-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="text-xl font-extrabold text-white">100%</div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">Dedication</div>
            </div>

          </div>

        </div>

        {/* FILTER CATEGORY PILLS BAR */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] border border-purple-400/50 scale-105'
                  : 'bg-[#080d1a]/80 text-slate-400 border border-slate-800/90 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, idx) => {
            const projectImg = getProjectImage(project.image);
            const numString = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 overflow-hidden shadow-xl backdrop-blur-md flex flex-col justify-between group hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Card Thumbnail Image Container */}
                  <div 
                    onClick={() => onSelectProject(project)}
                    className="relative h-48 w-full overflow-hidden bg-slate-950 border-b border-slate-800/60 cursor-pointer group/img"
                  >
                    <img
                      src={projectImg}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/20 to-transparent"></div>

                    {/* Number Badge (Top Left Corner) */}
                    <div className="absolute top-3 left-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-950/90 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center justify-center shadow-lg backdrop-blur-md">
                        {numString}
                      </div>
                    </div>

                    {/* Details Hint Badge (Top Right Corner) */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity">
                      <div className="px-2.5 py-1 rounded-lg bg-purple-900/90 border border-purple-400/50 text-purple-200 font-bold text-[10px] shadow-lg backdrop-blur-md">
                        View Details
                      </div>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div 
                    onClick={() => onSelectProject(project)}
                    className="p-5 space-y-3 cursor-pointer"
                  >
                    {/* Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs font-semibold text-cyan-400 leading-snug">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[10px] font-medium text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions (Bottom Buttons) */}
                <div className="p-5 pt-0 flex items-center gap-3">
                  {/* Live Demo Button */}
                  {project.demoUrl && project.demoUrl.startsWith('http') ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-950/50 border border-purple-400/30 transition-all active:scale-95"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-950/50 border border-purple-400/30 transition-all active:scale-95"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {/* GitHub Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* BOTTOM CALLOUT BANNER */}
        <div className="rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#080d1a] to-cyan-950/40 border border-purple-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center shrink-0 text-purple-400 shadow-lg">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Interested in working together?</h4>
              <p className="text-xs sm:text-sm text-slate-400">Let's build something amazing and secure.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-purple-600/30 hover:scale-105 shrink-0"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
