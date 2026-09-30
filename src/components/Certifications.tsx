import React, { useState } from 'react';
import {
  Award,
  Shield,
  Calendar,
  Sparkles,
  ChevronDown,
  LayoutGrid,
  ExternalLink,
  Download,
  X,
  ShieldCheck,
  TrendingUp,
  Layers,
  Code2
} from 'lucide-react';
import { TechLogo } from './TechLogos';

interface CertItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  badge: string;
  badgeStyle: string;
  logoKey: string;
  credentialUrl?: string;
  certificateCode?: string;
  skillsLearned?: string[];
}

export const Certifications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All Certifications');
  const [sortBy, setSortBy] = useState<string>('Latest');
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);

  const filterOptions = [
    'All Certifications',
    'Cybersecurity',
    'Web Development',
    'AI / Machine Learning',
    'Cloud & DevOps',
    'Programming',
    'Others'
  ];

  const certifications: CertItem[] = [
    {
      id: 'google-ai',
      title: 'Introduction to Generative AI',
      issuer: 'Google Cloud',
      date: 'Sep 2025',
      category: 'AI / Machine Learning',
      badge: 'AI / ML',
      badgeStyle: 'bg-purple-950/80 border-purple-500/40 text-purple-300',
      logoKey: 'googlecloud',
      certificateCode: '9053330',
      credentialUrl: 'https://drive.google.com/file/d/1DRZfA6v-xVSPo25NNaybypnw2-8xEmmm/view?usp=sharing',
      skillsLearned: ['Generative AI', 'Large Language Models', 'Google Cloud AI', 'Prompt Engineering', 'Responsible AI']
    },
    {
      id: 'qualys-vm',
      title: 'Qualys Certified Specialist – Vulnerability Management Detection and Response',
      issuer: 'Qualys',
      date: 'Mar 2026',
      category: 'Cybersecurity',
      badge: 'Cybersecurity',
      badgeStyle: 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300',
      logoKey: 'qualys',
      credentialUrl: 'https://drive.google.com/file/d/1PQyCwa4sfw_o6K5406eU7MhUPa5uMyZT/view?usp=sharing',
      skillsLearned: ['Vulnerability Management', 'Threat Detection', 'Response Strategy', 'Cybersecurity']
    },
    {
      id: 'codechef-problem-solving',
      title: 'CodeChef Problem Solving (500 difficulty rating)',
      issuer: 'CodeChef',
      date: 'Sep 2025',
      category: 'Programming',
      badge: 'Programming',
      badgeStyle: 'bg-amber-950/80 border-amber-500/40 text-amber-300',
      logoKey: 'codechef',
      credentialUrl: 'https://drive.google.com/file/d/1uytjvukYG2V8Mvx2fDaYFZFNZJdpt577/view?usp=sharing',
      skillsLearned: ['Data Structures', 'Algorithms', 'Competitive Programming', 'Problem Solving']
    },
    {
      id: 'nptel-ebusiness',
      title: 'E-Business',
      issuer: 'NPTEL / IIT Kharagpur',
      date: 'Apr 2026',
      category: 'Others',
      badge: 'E-Business',
      badgeStyle: 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300',
      logoKey: 'nptel',
      credentialUrl: 'https://drive.google.com/file/d/1HAKq4WRABFntLG1iOoW9jBMEtMVdKbH-/view?usp=sharing',
      skillsLearned: ['E-Commerce Strategies', 'Digital Transformation', 'Business Technology', 'IT Integration']
    },
    {
      id: 'nptel-leadership',
      title: 'Leadership and Team Effectiveness',
      issuer: 'NPTEL / IIT Roorkee',
      date: 'Apr 2026',
      category: 'Others',
      badge: 'Leadership',
      badgeStyle: 'bg-blue-950/80 border-blue-500/40 text-blue-300',
      logoKey: 'nptel',
      credentialUrl: 'https://drive.google.com/file/d/1JffCnGZz15AYYS2tTRuHgtjxEaV39ra-/view?usp=sharing',
      skillsLearned: ['Team Management', 'Leadership Dynamics', 'Organizational Behavior', 'Communication']
    },
    {
      id: 'cisco-python-1',
      title: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      date: 'Apr 2025',
      category: 'Programming',
      badge: 'Programming',
      badgeStyle: 'bg-indigo-950/80 border-indigo-500/40 text-indigo-300',
      logoKey: 'cisco',
      credentialUrl: 'https://drive.google.com/file/d/1520Dpo4Nhaf8jiTShTU6GolKDsZrn09R/view?usp=sharing',
      skillsLearned: ['Python Syntax', 'Data Types', 'Control Flow', 'Functions']
    },
    {
      id: 'cisco-python-2',
      title: 'Python Essentials 2',
      issuer: 'Cisco Networking Academy',
      date: 'Apr 2025',
      category: 'Programming',
      badge: 'Programming',
      badgeStyle: 'bg-indigo-950/80 border-indigo-500/40 text-indigo-300',
      logoKey: 'cisco',
      credentialUrl: 'https://drive.google.com/file/d/1_zJVuF97o8ijWjUzujuDpyJA8ncq4WfK/view?usp=sharing',
      skillsLearned: ['OOP in Python', 'Modules & Packages', 'Exception Handling', 'File Processing']
    },
    {
      id: 'cisco-os-basics',
      title: 'Operating Systems Basics',
      issuer: 'Cisco Networking Academy',
      date: 'Apr 2026',
      category: 'Others',
      badge: 'OS Basics',
      badgeStyle: 'bg-sky-950/80 border-sky-500/40 text-sky-300',
      logoKey: 'cisco',
      credentialUrl: 'https://drive.google.com/file/d/1BfK2VrCnsPhZ4UYEFbaAZzYVGiLhdgqz/view?usp=sharing',
      skillsLearned: ['Operating Systems Concepts', 'Linux Administration', 'File Systems', 'Process Management']
    },
    {
      id: 'cisco-js-1',
      title: 'JavaScript Essentials 1',
      issuer: 'Cisco Networking Academy',
      date: 'Apr 2026',
      category: 'Programming',
      badge: 'Programming',
      badgeStyle: 'bg-yellow-950/80 border-yellow-500/40 text-yellow-300',
      logoKey: 'cisco',
      credentialUrl: 'https://drive.google.com/file/d/1WukRc3KCi2BwSJ8jE__5Ne-UBNwYbOtw/view?usp=sharing',
      skillsLearned: ['JavaScript Fundamentals', 'DOM Manipulation', 'Variables & Operators', 'Control Structures']
    },
    {
      id: 'cisco-js-2',
      title: 'JavaScript Essentials 2',
      issuer: 'Cisco Networking Academy',
      date: 'May 2026',
      category: 'Programming',
      badge: 'Programming',
      badgeStyle: 'bg-yellow-950/80 border-yellow-500/40 text-yellow-300',
      logoKey: 'cisco',
      credentialUrl: 'https://drive.google.com/file/d/1VL3NhyQy5pUrvvQVu4HEpY6LlviN0TTG/view?usp=sharing',
      skillsLearned: ['Asynchronous JS', 'Promises & Async/Await', 'ES6+ Features', 'APIs']
    },
    {
      id: 'ibm-cyber',
      title: 'Cybersecurity Fundamentals',
      issuer: 'IBM',
      date: 'Apr 2026',
      category: 'Cybersecurity',
      badge: 'Cybersecurity',
      badgeStyle: 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300',
      logoKey: 'edx',
      skillsLearned: ['Threat Intelligence', 'Network Defense', 'Cryptography', 'SIEM']
    },
    {
      id: 'cisco-cyber',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'Mar 2026',
      category: 'Cybersecurity',
      badge: 'Networking',
      badgeStyle: 'bg-indigo-950/80 border-indigo-500/40 text-indigo-300',
      logoKey: 'cisco',
      skillsLearned: ['Network Protocols', 'Firewalls', 'Ethical Hacking', 'Packet Analysis']
    },
    {
      id: 'aws-cloud',
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Feb 2026',
      category: 'Cloud & DevOps',
      badge: 'Cloud',
      badgeStyle: 'bg-amber-950/80 border-amber-500/40 text-amber-300',
      logoKey: 'aws',
      skillsLearned: ['EC2', 'S3 Storage', 'IAM Security', 'Cloud Architecture']
    },
    {
      id: 'ms-security',
      title: 'Microsoft Security, Compliance & Identity',
      issuer: 'Microsoft Learn',
      date: 'Jan 2026',
      category: 'Cybersecurity',
      badge: 'Security',
      badgeStyle: 'bg-blue-950/80 border-blue-500/40 text-blue-300',
      logoKey: 'microsoft',
      skillsLearned: ['Azure Active Directory', 'Zero Trust Architecture', 'Compliance Center']
    },
    {
      id: 'fcc-web',
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'Dec 2025',
      category: 'Web Development',
      badge: 'Web Dev',
      badgeStyle: 'bg-sky-950/80 border-sky-500/40 text-sky-300',
      logoKey: 'freecodecamp',
      skillsLearned: ['HTML5', 'CSS3', 'Flexbox & Grid', 'Mobile First Design']
    },
    {
      id: 'intel-ai-bootcamp',
      title: 'AI for Future Workforce Bootcamp',
      issuer: "Intel Digital Readiness + Vignan's Foundation",
      date: 'Jun 2026',
      category: 'Others',
      badge: 'AI Bootcamp',
      badgeStyle: 'bg-blue-950/80 border-blue-500/40 text-blue-300',
      logoKey: 'intel',
      credentialUrl: 'https://drive.google.com/file/d/1lYiqoY1mGyw0WBdj2kd5PHYGlYjIAX-x/view?usp=sharing',
      skillsLearned: ['Intel AI Tools', 'Machine Learning', 'Computer Vision', 'Deep Learning']
    },
    {
      id: 'ibm-data-science',
      title: 'Data Science Foundations',
      issuer: 'IBM',
      date: 'Oct 2025',
      category: 'AI / Machine Learning',
      badge: 'Data Science',
      badgeStyle: 'bg-teal-950/80 border-teal-500/40 text-teal-300',
      logoKey: 'ibm',
      skillsLearned: ['Python Data Analysis', 'Pandas & NumPy', 'Data Visualization', 'SQL']
    },
    {
      id: 'ibm-cyber-fundamentals',
      title: 'Cybersecurity Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'Jan 2026',
      category: 'Cybersecurity',
      badge: 'Cybersecurity',
      badgeStyle: 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300',
      logoKey: 'ibm',
      credentialUrl: 'https://drive.google.com/file/d/1meV-sbeadUDmD3mKgiK-d6sVu_JDescT/view?usp=sharing',
      skillsLearned: ['Cybersecurity Concepts', 'Network Security', 'Threat Analysis', 'Security Management']
    },
    {
      id: 'ms-cyber-threats',
      title: 'Describe Basic Cybersecurity Threats, Attacks, and Mitigations',
      issuer: 'Microsoft',
      date: 'Jun 2026',
      category: 'Cybersecurity',
      badge: 'Cybersecurity',
      badgeStyle: 'bg-blue-950/80 border-blue-500/40 text-blue-300',
      logoKey: 'microsoft',
      credentialUrl: 'https://drive.google.com/file/d/1nlcoep3a495TtTYtXyNZ2LUb32VESSWa/view?usp=sharing',
      skillsLearned: ['Cybersecurity Threats', 'Attack Vectors', 'Security Mitigations', 'Microsoft Security']
    },
    {
      id: 'ms-genai-agents',
      title: 'Introduction to Generative AI and Agents',
      issuer: 'Microsoft',
      date: 'Dec 2025',
      category: 'AI / Machine Learning',
      badge: 'AI / ML',
      badgeStyle: 'bg-purple-950/80 border-purple-500/40 text-purple-300',
      logoKey: 'microsoft',
      credentialUrl: 'https://drive.google.com/file/d/1T-R6-pOeXre4v_kik_-2d-B25jvlVMvE/view?usp=sharing',
      skillsLearned: ['Generative AI', 'AI Agents', 'LLMs', 'Prompt Engineering', 'Azure AI']
    },
    {
      id: 'python-spec',
      title: 'Python for Everybody Specialization',
      issuer: 'University of Michigan',
      date: 'Jun 2025',
      category: 'Programming',
      badge: 'Programming',
      badgeStyle: 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300',
      logoKey: 'python',
      skillsLearned: ['Data Structures', 'Web Scraping', 'Database Integration', 'API Access']
    }
  ];

  const monthOrder: Record<string, number> = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
    Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12
  };

  const getCertTime = (dateStr: string): number => {
    const parts = dateStr.trim().split(' ');
    if (parts.length < 2) return 0;
    const month = monthOrder[parts[0]] || 1;
    const year = parseInt(parts[1], 10) || 2020;
    return year * 100 + month;
  };

  // Filtering and Sorting logic
  const filteredCerts = certifications
    .filter((cert) => {
      if (activeFilter === 'All Certifications') return true;
      if (activeFilter === 'Cybersecurity' && cert.category === 'Cybersecurity') return true;
      if (activeFilter === 'Web Development' && cert.category === 'Web Development') return true;
      if (activeFilter === 'AI / Machine Learning' && cert.category === 'AI / Machine Learning') return true;
      if (activeFilter === 'Cloud & DevOps' && cert.category === 'Cloud & DevOps') return true;
      if (activeFilter === 'Programming' && cert.category === 'Programming') return true;
      if (activeFilter === 'Others' && !['Cybersecurity', 'Web Development', 'AI / Machine Learning', 'Cloud & DevOps', 'Programming'].includes(cert.category)) return true;
      return cert.category === activeFilter;
    })
    .sort((a, b) => {
      const timeA = getCertTime(a.date);
      const timeB = getCertTime(b.date);
      if (sortBy === 'Oldest') return timeA - timeB;
      return timeB - timeA; // Latest first by default
    });

  return (
    <section id="certifications" className="py-20 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP HEADER: Title on Left, 4 Stat Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Header Left */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-bold text-purple-400 tracking-widest uppercase flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-purple-500"></span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>MY CERTIFICATIONS</span>
              <span className="w-5 h-[1.5px] bg-purple-500"></span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Certifications{' '}
              </span>
              <span className="text-white">That </span>
              <br className="hidden sm:inline" />
              <span className="text-white">Build My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                Expertise
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              A collection of certifications that validate my skills, knowledge and commitment to continuous learning.
            </p>
          </div>

          {/* Header Right: 4 Stat Box Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            
            {/* Stat 1 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1 group hover:border-purple-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-xl font-extrabold text-white">{certifications.length}+</div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">Certifications Earned</div>
            </div>

            {/* Stat 2 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1 group hover:border-cyan-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-xl font-extrabold text-white">8+</div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">Domains Covered</div>
            </div>

            {/* Stat 3 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1 group hover:border-indigo-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-sm font-extrabold text-white">2024 - 2026</div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">Active Learning Period</div>
            </div>

            {/* Stat 4 */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/80 p-3.5 shadow-xl backdrop-blur-md flex flex-col items-center text-center justify-center space-y-1 group hover:border-sky-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-xl font-extrabold text-white">100%</div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">Dedication to Growth</div>
            </div>

          </div>

        </div>

        {/* FILTER BAR & CONTROLS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Filter Options Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 ${
                  activeFilter === opt
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] border border-purple-400/50 scale-105'
                    : 'bg-[#080d1a]/80 text-slate-400 border border-slate-800/90 hover:text-white hover:border-slate-700'
                }`}
              >
                {opt === 'Cybersecurity' && <Shield className="w-3.5 h-3.5 text-cyan-400" />}
                {opt === 'Web Development' && <Code2 className="w-3.5 h-3.5 text-purple-400" />}
                {opt === 'AI / Machine Learning' && <Sparkles className="w-3.5 h-3.5 text-pink-400" />}
                <span>{opt}</span>
              </button>
            ))}
          </div>

          {/* Right Controls: Sort Dropdown & Layout Button */}
          <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#080d1a] border border-slate-800 text-slate-300 text-xs font-semibold py-2 pl-3 pr-8 rounded-xl focus:outline-none focus:border-purple-500/50 cursor-pointer"
              >
                <option value="Latest">Sort by: Latest</option>
                <option value="Oldest">Sort by: Oldest</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <button className="p-2.5 rounded-xl bg-[#080d1a] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* CERTIFICATIONS GRID (6 Columns on Large Screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-4 shadow-xl backdrop-blur-md flex flex-col justify-between group hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Top Logo & Domain Badge Header */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800/60">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center p-1.5 shrink-0 shadow-inner">
                    <TechLogo name={cert.logoKey} className="w-5 h-5" />
                  </div>
                  <span className={`px-2 py-0.5 rounded-md border text-[9px] font-extrabold tracking-wide truncate max-w-[100px] ${cert.badgeStyle}`}>
                    {cert.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors mb-1 leading-snug line-clamp-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="text-[11px] font-semibold text-slate-400 mb-3 truncate">
                  {cert.issuer}
                </div>
              </div>

              <div>
                {/* Date */}
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mb-3 pt-2 border-t border-slate-800/60">
                  <Calendar className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>{cert.date}</span>
                </div>

                {/* View Certificate Button */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-1.5 px-2 rounded-xl text-[10px] font-bold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-purple-500/40 flex items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3 h-3 text-purple-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CALLOUT BANNER */}
        <div className="rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#080d1a] to-cyan-950/40 border border-purple-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-md">
          
          <div className="flex items-center gap-4 text-center sm:text-left">
            {/* Glowing Ribbon Icon Circle */}
            <div className="w-14 h-14 rounded-2xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center shrink-0 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Learning Never Stops</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                I believe in continuous learning and upskilling to stay updated with the latest technologies.
              </p>
            </div>
          </div>

          <button
            onClick={() => alert("Downloading all verified certificates archive...")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-purple-600/30 hover:scale-105 shrink-0"
          >
            <span>Download All Certificates</span>
            <Download className="w-4 h-4" />
          </button>

        </div>

      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0b0f19] border border-purple-500/30 rounded-3xl max-w-lg w-full p-6 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-950 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <TechLogo name={selectedCert.logoKey} className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                <p className="text-xs text-purple-300">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
            </div>

            {/* Certificate Mock Badge Box */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-purple-500/20 text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 p-[2px] shadow-lg shadow-purple-500/30 flex items-center justify-center">
                <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
              <p className="text-xs text-slate-300 font-mono">
                Official Credential Issued to <span className="text-white font-bold">Shaik Hiba Tharunnum</span>
              </p>
              {selectedCert.certificateCode && (
                <div className="inline-block px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-500/40 text-[11px] font-mono text-cyan-300">
                  Certificate Code: {selectedCert.certificateCode}
                </div>
              )}
              {selectedCert.skillsLearned && (
                <div className="pt-2 flex flex-wrap justify-center gap-1.5">
                  {selectedCert.skillsLearned.map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 text-[11px] text-purple-300">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800"
              >
                Close
              </button>
              <a
                href={selectedCert.credentialUrl || '#'}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  if (!selectedCert.credentialUrl || selectedCert.credentialUrl === '#') {
                    e.preventDefault();
                    alert(`Verified credential page for ${selectedCert.title}`);
                  }
                }}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center gap-1.5 shadow-md"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
