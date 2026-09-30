import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Terminal, User, Shield } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
}

export const AiAssistantModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'assistant',
      text: "Hi! I'm Hiba's AI Portfolio Assistant. Ask me anything about her Full-Stack projects, Cybersecurity research, or technical background!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const promptText = input.trim();
    if (!promptText || loading) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: promptText
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptText })
      });

      const data = await response.json();

      const botMsg: ChatMessage = {
        id: `bot_${Date.now()}`,
        sender: 'assistant',
        text: data.reply || "I couldn't process that. Feel free to ask about Hiba's projects or skills!"
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('[AI Chat Error]:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot_err_${Date.now()}`,
          sender: 'assistant',
          text: "I'm experiencing a temporary network issue, but Hiba specializes in Python, React, Cybersecurity, and AI development!"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-600 text-white shadow-2xl shadow-purple-500/40 hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group"
        title="Ask Hiba's AI Assistant"
      >
        <div className="relative">
          <Bot className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
        </div>
        <span className="hidden sm:inline text-xs font-bold">Ask AI Assistant</span>
      </button>

      {/* Floating Chat Modal Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-full max-w-sm sm:max-w-md h-[480px] bg-[#0b0f19] border border-purple-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="p-4 bg-[#0f172a] border-b border-purple-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-950 border border-purple-500/30 text-purple-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Hiba's AI Assistant</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-[9px] font-mono border border-emerald-500/30">
                    Online
                  </span>
                </h3>
                <p className="text-[10px] text-purple-300">Powered by Gemini AI Engine</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-purple-950 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium'
                      : 'bg-slate-900 border border-slate-800 text-slate-200'
                  }`}
                >
                  {m.text}
                </div>

                {m.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-slate-400 text-xs italic">
                <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
                <span>Thinking...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts Suggestions */}
          <div className="px-3 py-1.5 bg-slate-950/60 border-t border-slate-800/80 flex gap-1.5 overflow-x-auto text-[10px]">
            <button
              onClick={() => setInput("What is SentinelDrive?")}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-purple-300 hover:bg-purple-950/40 whitespace-nowrap"
            >
              What is SentinelDrive?
            </button>
            <button
              onClick={() => setInput("What are Hiba's skills?")}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-blue-300 hover:bg-blue-950/40 whitespace-nowrap"
            >
              What are Hiba's skills?
            </button>
            <button
              onClick={() => setInput("Is Hiba available for internships?")}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-emerald-300 hover:bg-emerald-950/40 whitespace-nowrap"
            >
              Internship availability?
            </button>
          </div>

          {/* Input Bar */}
          <form onSubmit={handleSend} className="p-3 bg-[#0f172a] border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Hiba..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
