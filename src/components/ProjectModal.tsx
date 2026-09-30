import React, { useState } from 'react';
import { X, ExternalLink, Github, Play, Shield, Terminal, CheckCircle2, Lock, Key, Cpu, Sparkles } from 'lucide-react';
import { Project } from '../../backend/data/portfolioData';
import { getProjectImage } from '../utils/images';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Interactive Live Demo simulation state
  const [demoInput, setDemoInput] = useState('');
  const [demoOutput, setDemoOutput] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRunSimulation = () => {
    setIsProcessing(true);
    setDemoOutput(null);

    setTimeout(() => {
      setIsProcessing(false);

      if (project.id === 'sentinel-drive') {
        setDemoOutput(`[CAN Bus Security Log] 
> Scanning ECU Arbitration ID: 0x21F
> Signal Frequency: 100Hz (Normal: 100Hz)
> Intrusion Classification: 0x00 NONE DETECTED
> Driver Heartbeat Status: AUTHENTICATED
> OTA Signature: RSA-4096 VALIDATED`);
      } else if (project.id === 'file-encryption-tool') {
        const secretText = demoInput.trim() || 'HibaShaikSecureData2026';
        // Base64 simulated cipher representation
        const cipher = btoa(`FERNET_AES256_${secretText}_VAULT`);
        setDemoOutput(`[AES-256 Fernet Cipher Suite]
Original Data: "${secretText}"
Cipher Text: ${cipher}
HMAC Integrity Checksum: SHA256-Pass
Status: File encrypted into isolated memory buffer.`);
      } else if (project.id === 'packet-analyzer') {
        setDemoOutput(`[Scapy Sniffer Session Active]
[10.0.0.12:443 -> 192.168.1.5:52134] TCP SYN-ACK | Seq=18231 | Payload: 64 bytes
[192.168.1.5:52134 -> 10.0.0.12:443] TCP ACK | Handshake Verified
Anomalous UDP Traffic: 0 Packets (Clean Network State)`);
      } else {
        setDemoOutput(`[${project.title} Simulation Pipeline]
> System Initialized
> Executing module analysis for input: "${demoInput || 'Sample Benchmark'}"
> Output: Success (Score: 98.4% Match Rate)`);
      }
    }, 800);
  };

  const projectImg = getProjectImage(project.image);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-[#0b0f19] border border-purple-500/30 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-[10px] font-extrabold uppercase tracking-wider">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-[10px] font-extrabold uppercase tracking-wider">
                Featured Architecture
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h2>
          <p className="text-xs sm:text-sm font-bold text-cyan-400">{project.subtitle}</p>
        </div>

        {/* Project Thumbnail Image */}
        <div className="relative h-48 sm:h-64 w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
          <img src={projectImg} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent"></div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Key Features List */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider text-purple-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Key Engineering Features</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span key={idx} className="px-3 py-1 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Live Demo Simulation Panel */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-purple-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span>Interactive Live Demo Simulation</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">Sandbox Ready</span>
          </div>

          <div className="space-y-2">
            {project.id === 'file-encryption-tool' && (
              <input
                type="text"
                value={demoInput}
                onChange={(e) => setDemoInput(e.target.value)}
                placeholder="Enter text to encrypt with AES-256 Fernet..."
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white outline-none focus:border-purple-500"
              />
            )}

            <button
              onClick={handleRunSimulation}
              disabled={isProcessing}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-all flex items-center gap-2 active:scale-95 disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>{isProcessing ? 'Processing Request...' : 'Run Live Demo Simulation'}</span>
            </button>

            {demoOutput && (
              <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto whitespace-pre-wrap leading-relaxed animate-in fade-in duration-200">
                {demoOutput}
              </pre>
            )}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800"
          >
            Close Modal
          </button>

          <div className="flex items-center gap-3">
            {project.demoUrl && project.demoUrl.startsWith('http') && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md border border-purple-400/30"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:border-purple-500/40"
            >
              <Github className="w-4 h-4" />
              <span>View Repository</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
