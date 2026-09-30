import { Router, Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export const aiRouter = Router();

let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

aiRouter.post('/ai/chat', async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body || {};

    if (!prompt || typeof prompt !== 'string') {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }

    const client = getAiClient();

    const systemContext = `
You are an AI Portfolio Assistant for Hiba Tharunnum Shaik.
Hiba is a Computer Science Engineering student (3rd Year, B.Tech, CGPA 8.9) and Full Stack Developer, Cybersecurity Enthusiast, and AI Explorer.
Her key projects include:
1. SentinelDrive (Automotive Cybersecurity for SDVs with CAN Bus IDS, ECU fingerprinting)
2. AutoResearch Agent (Multi-Agent AI system for research paper analysis and review generation)
3. File Encryption & Decryption Tool (AES-256 Fernet cryptography, key vaulting)
4. Network Packet Analyzer (Scapy packet sniffer and threat detector)
5. Skill Nova (AI Resume & ATS optimizer)
6. Smart Road Planning System (MST graph algorithm visualizer)

Her skills:
- Languages: Python, C, JavaScript, TypeScript
- Frontend: React.js, Tailwind CSS, Vite, Redux, HTML5, CSS3
- Backend: Node.js, Express.js, Flask, FastAPI, Python
- Databases: MongoDB, PostgreSQL, MySQL, Redis
- Cybersecurity: Ethical Hacking, Network Security, API Security, Vulnerability Analysis, Encryption, CAN Bus Security
- AI/ML: Machine Learning, NLP, Generative AI, AI Agents, LLM APIs
- Certifications: Cisco Cybersecurity Essentials, Coursera Python for Everybody, Great Learning Ethical Hacking, Google AI Intro.
- Achievements: Smart India Hackathon Top 10, Tata Technologies InnoVent Finalist, 200+ DSA Solved, CodeChef 4* (1650).

Respond in a friendly, enthusiastic, professional tone representing Hiba's AI Assistant. Keep answers concise, helpful, and formatted with bullet points or bold text where applicable.
`;

    if (client) {
      try {
        const response = await client.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            { role: 'user', parts: [{ text: `${systemContext}\n\nUser Question: ${prompt}` }] }
          ]
        });

        const reply = response.text || "I'm Hiba's AI Assistant! Feel free to ask about her projects, cybersecurity skills, or full-stack experience.";
        res.json({ reply, source: 'gemini' });
        return;
      } catch (err) {
        console.warn('[Gemini API Fallback]:', err);
      }
    }

    // Smart fallback if key is not configured or fails
    let fallbackReply = `Hi there! I'm Hiba's AI Assistant. Hiba Shaik is a Computer Science Engineering student specializing in Full-Stack Development, Cybersecurity, and AI.`;
    const pLower = prompt.toLowerCase();

    if (pLower.includes('project') || pLower.includes('sentinel') || pLower.includes('car')) {
      fallbackReply = `Hiba has built 10+ impressive projects! Her flagship project is **SentinelDrive**, an Edge AI automotive cybersecurity platform that detects CAN Bus intrusion and sensor spoofing. She also built **AutoResearch Agent** (multi-agent AI research tool) and **File Encryption Tool** (AES-256).`;
    } else if (pLower.includes('skill') || pLower.includes('python') || pLower.includes('react') || pLower.includes('security')) {
      fallbackReply = `Hiba's primary tech stack spans **Python, React.js, Node.js, Express, FastAPI, PostgreSQL, and MongoDB**. In Cybersecurity, she specializes in **Ethical Hacking, Network Security, API Security, and Encryption**. In AI, she works with **LLMs, AI Agents, and NLP**.`;
    } else if (pLower.includes('contact') || pLower.includes('hire') || pLower.includes('email') || pLower.includes('intern')) {
      fallbackReply = `Hiba is currently **Open to Opportunities for Internships & Full-time Roles**! You can email her directly at **hibagun007@gmail.com** or connect via LinkedIn at **linkedin.com/in/hiba-shaik**.`;
    } else if (pLower.includes('experience') || pLower.includes('prodigy') || pLower.includes('certif')) {
      fallbackReply = `Hiba worked as a **Cybersecurity Intern at Prodigy Infotech**, participated in the **Intel AI for Future Workforce Bootcamp**, and reached the **Tata Technologies InnoVent Finalist** stage. She holds 12+ certifications including Cisco Cybersecurity Essentials!`;
    }

    res.json({ reply: fallbackReply, source: 'knowledge-base' });
  } catch (error) {
    console.error('[AI Chat Error]:', error);
    res.status(500).json({ error: 'Failed to process AI query' });
  }
});
