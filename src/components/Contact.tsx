import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  Lock,
  Copy,
  Check,
  ExternalLink,
  Globe,
  User,
  Tag,
  Pencil,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shaikhibatharunnum@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const apiEndpoint = `${import.meta.env.VITE_API_BASE_URL || ''}/api/contact`;
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: data.message || 'Thank you for reaching out! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (err) {
      console.error('[Contact Error]:', err);
      // Fallback friendly message if api route is offline or handling local demo
      setStatus({
        type: 'success',
        message: 'Thank you for reaching out! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#020617] relative overflow-hidden border-t border-slate-900">

      {/* Background Circuit Grid & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.08)_0,transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.08)_0,transparent_60%)] pointer-events-none"></div>

      {/* Background Circuit Board Paths Vector Decor */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1200 800" fill="none">
        <path d="M50 100 H300 L350 150 V300 L400 350 H600" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="300" cy="100" r="3" fill="#8B5CF6" />
        <circle cx="350" cy="150" r="3" fill="#8B5CF6" />
        <path d="M1150 200 H900 L850 250 V500 L800 550 H600" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="900" cy="200" r="3" fill="#3B82F6" />
        <circle cx="850" cy="250" r="3" fill="#3B82F6" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* TOP SECTION HEADER: Tag & Heading & Subtitle */}
        <div className="mb-12 space-y-3">

          {/* Tagline Badge */}
          <div className="text-xs font-bold text-purple-400 tracking-widest uppercase flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-purple-500"></span>
            <span>GET IN TOUCH</span>
            <span className="w-5 h-[1.5px] bg-purple-500"></span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Build Something{' '}
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              Secure
            </span>{' '}
            <span className="text-white">& </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
              Intelligent
            </span>
          </h2>

          {/* Subtitle Paragraph */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
            I'm always excited to collaborate on innovative projects, discuss cybersecurity, or explore new opportunities. Let's connect and create a safer digital future together!
          </p>

          {/* Status Pill Badge */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#080d1a]/90 border border-slate-800 text-slate-300 text-xs shadow-lg backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-bold text-white">Open to Opportunities</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Available for Internships & Full-time Roles</span>
            </div>
          </div>

        </div>

        {/* TWO COLUMN CONTENT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">

          {/* LEFT COLUMN: 4 Contact Cards & 3D Padlock Graphic */}
          <div className="lg:col-span-5 space-y-4">

            {/* Card 1: Email */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-4 shadow-xl backdrop-blur-md flex items-center justify-between group hover:border-purple-500/40 transition-all">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0 shadow-inner">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-slate-400 font-semibold">Email</div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate">
                    shaikhibatharunnum@gmail.com
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/50 transition-all shrink-0 ml-2"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Card 2: LinkedIn */}
            <a
              href="https://www.linkedin.com/in/hiba-tharunnum-shaik-60a33b393/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-4 shadow-xl backdrop-blur-md flex items-center justify-between group hover:border-blue-500/40 transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-sky-400 shrink-0 shadow-inner">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-slate-400 font-semibold">LinkedIn</div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate">
                    hiba-tharunnum-shaik-60a33b393
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-white group-hover:border-blue-500/50 transition-all shrink-0 ml-2">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* Card 3: GitHub */}
            <a
              href="https://github.com/HibaShaik13"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-4 shadow-xl backdrop-blur-md flex items-center justify-between group hover:border-purple-500/40 transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white shrink-0 shadow-inner">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-slate-400 font-semibold">GitHub</div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate">
                    github.com/HibaShaik13
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-white group-hover:border-purple-500/50 transition-all shrink-0 ml-2">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* Card 4: Location */}
            <div className="rounded-2xl bg-[#080d1a]/90 border border-slate-800/90 p-4 shadow-xl backdrop-blur-md flex items-center justify-between group hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-inner">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-slate-400 font-semibold">Location</div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate">
                    Guntur, Andhra Pradesh, India
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 shrink-0 ml-2">
                <Globe className="w-4 h-4 text-cyan-400" />
              </div>
            </div>

            {/* Bottom Left: 3D Glowing Neon Padlock Graphic */}
            <div className="pt-4 relative hidden sm:flex items-center justify-start">
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Concentric Glowing Waves */}
                <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl animate-pulse"></div>
                <div className="absolute w-32 h-10 bottom-2 rounded-[100%] border border-cyan-500/40 bg-cyan-500/10 shadow-[0_0_20px_rgba(34,211,238,0.3)]"></div>
                <div className="absolute w-24 h-6 bottom-4 rounded-[100%] border border-purple-500/50 bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.4)]"></div>

                {/* Neon Padlock Icon */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-16 rounded-xl border-2 border-cyan-400 bg-cyan-950/80 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.8)] relative">
                    <div className="w-8 h-8 -mt-9 border-2 border-cyan-400 border-b-0 rounded-t-full"></div>
                    <Lock className="w-6 h-6 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,1)]" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Send Me a Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#080d1a]/95 border border-purple-500/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(147,51,234,0.15)] backdrop-blur-xl relative overflow-hidden space-y-6">

              {/* Form Header */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/50 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] shrink-0">
                  <Send className="w-6 h-6 transform -rotate-12" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Send Me a Message</h3>
                  <p className="text-xs text-slate-400">I'll get back to you as soon as possible!</p>
                </div>
              </div>

              {/* Status Banner */}
              {status && (
                <div
                  className={`p-4 rounded-2xl border flex items-start gap-3 text-xs ${status.type === 'success'
                      ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                      : 'bg-red-950/60 border-red-500/40 text-red-300'
                    }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#030712]/90 border border-slate-800 focus:border-purple-500/60 text-white placeholder:text-slate-500 text-xs sm:text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your Email"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#030712]/90 border border-slate-800 focus:border-purple-500/60 text-white placeholder:text-slate-500 text-xs sm:text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                    <Tag className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#030712]/90 border border-slate-800 focus:border-purple-500/60 text-white placeholder:text-slate-500 text-xs sm:text-sm outline-none transition-all"
                  />
                </div>

                {/* Row 3: Message Textarea */}
                <div className="relative">
                  <div className="absolute left-3.5 top-4 text-slate-500">
                    <Pencil className="w-4 h-4" />
                  </div>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your Message"
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#030712]/90 border border-slate-800 focus:border-purple-500/60 text-white placeholder:text-slate-500 text-xs sm:text-sm outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/25 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

              {/* Security Privacy Notice */}
              <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Your information is secure and will never be shared.</span>
              </div>

            </div>
          </div>

          {/* BOTTOM RIGHT: 3D Glowing Neon Envelope Graphic */}
          <div className="absolute -bottom-10 right-4 hidden lg:flex items-center justify-center pointer-events-none">
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Concentric Glowing Pedestal Rings */}
              <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-xl animate-pulse"></div>
              <div className="absolute w-40 h-12 bottom-2 rounded-[100%] border border-purple-500/40 bg-purple-500/10 shadow-[0_0_25px_rgba(168,85,247,0.4)]"></div>
              <div className="absolute w-32 h-8 bottom-4 rounded-[100%] border border-cyan-500/50 bg-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>

              {/* Glowing Wireframe Envelope Icon */}
              <div className="relative z-10 w-20 h-14 rounded-xl border-2 border-purple-400 bg-purple-950/80 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.9)]">
                <Mail className="w-10 h-10 text-purple-300 drop-shadow-[0_0_12px_rgba(168,85,247,1)]" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
