export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  category: 'Cybersecurity' | 'AI' | 'Full Stack' | 'Tools';
  featured: boolean;
  image: string;
  githubUrl: string;
  demoUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: string; level?: number }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  tag?: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  skillsLearned: string[];
  credentialUrl?: string;
}

export interface Achievement {
  title: string;
  event: string;
  year: string;
  badge: string;
  iconName: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  statPrimary: string;
  statSecondary: string;
  profileUrl: string;
  icon: string;
  color: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Hiba Tharunnum Shaik",
    shortName: "Hiba Shaik",
    title: "Cybersecurity & Ethical Hacking Enthusiast | Full Stack Developer",
    bio: "Computer Science Engineering student at VFSTR with hands-on experience in cybersecurity, cryptography, network packet analysis, and AI application development.",
    availability: "Open to Opportunities — Available for Internships & Full-time Roles",
    location: "Guntur, Andhra Pradesh, India",
    education: "Bachelor of Technology - Computer Science (VFSTR)",
    cgpa: "8.06",
    email: "shaikhibatharunnum@gmail.com",
    contactEmail: "shaikhibatharunnum@gmail.com",
    phone: "+91 9705406705",
    socials: {
      github: "https://github.com/HibaShaik13",
      linkedin: "https://www.linkedin.com/in/hiba-tharunnum-shaik-60a33b393/",
      leetcode: "https://leetcode.com/u/Shaik_Hiba/",
      codechef: "https://www.codechef.com/users/vu241fa04495",
      hackerrank: "https://hackerrank.com/hiba_shaik"
    },
    stats: {
      projectsBuilt: "10+",
      certifications: "12+",
      dsaSolved: "200+",
      hackathons: "5+"
    }
  },

  projects: [
    {
      id: "sentinel-drive",
      title: "SentinelDrive",
      subtitle: "Edge AI-based Automotive Cybersecurity Platform",
      description: "An AI-powered intrusion detection and mitigation platform designed for Software-Defined Vehicles (SDVs). Monitors CAN Bus traffic, identifies sensor spoofing, and performs ECU fingerprinting in real-time.",
      features: [
        "CAN Bus Intrusion Detection System (IDS)",
        "Sensor Spoofing Detection & Anomaly Classifier",
        "ECU Fingerprinting via Signal Analysis",
        "Driver Authentication & Security Telemetry",
        "Over-The-Air (OTA) Security Protocol",
        "V2X Threat Detection & Warning Matrix"
      ],
      tech: ["React", "FastAPI", "Python", "AI", "TensorFlow Lite", "ONNX", "PostgreSQL"],
      category: "Cybersecurity",
      featured: true,
      image: "sentinel_drive_car",
      githubUrl: "https://github.com/HibaShaik13/SentinelDrive",
      demoUrl: "#demo-sentinel"
    },
    {
      id: "autoresearch-agent",
      title: "AutoResearch Agent",
      subtitle: "Multi-Agent AI Research Automation System",
      description: "Autonomous multi-agent research workflow system that extracts literature from ArXiv and Semantic Scholar, analyzes gaps, generates hypotheses, and synthesizes literature reviews.",
      features: [
        "Research paper automated search & metadata extraction",
        "PDF section parser & key claim isolation",
        "Literature gap analysis & hypothesis generator",
        "Contradiction detection across publications",
        "Emerging research trend prediction engine",
        "Automated structured review draft generation"
      ],
      tech: ["Python", "Streamlit", "LLMs", "ArXiv API", "Semantic Scholar API", "FastAPI"],
      category: "AI",
      featured: true,
      image: "autoresearch_agent",
      githubUrl: "https://github.com/HibaShaik13/AutoResearchAgent",
      demoUrl: "https://my-research-ui.onrender.com"
    },
    {
      id: "file-encryption-tool",
      title: "File Encryption & Decryption Tool",
      subtitle: "Secure File Protection Application",
      description: "Military-grade file encryption tool with AES-256 and Fernet symmetric cryptography, featuring secure key vaulting, drag-and-drop file processing, and hash verification.",
      features: [
        "AES-256 / Fernet key generation & derivation",
        "Drag-and-drop batch file encryption & decryption",
        "Secure in-memory key handling & passkey hashing",
        "SHA-256 integrity verification checksums",
        "Zero-knowledge browser/server file stream vault"
      ],
      tech: ["React", "Tailwind CSS", "Flask", "Python", "Cryptography", "AES/Fernet"],
      category: "Cybersecurity",
      featured: true,
      image: "encryption_tool",
      githubUrl: "https://github.com/HibaShaik13/file-encryption-decryption-tool",
      demoUrl: "https://securefile-frontend.onrender.com/"
    },
    {
      id: "packet-analyzer",
      title: "Network Packet Analyzer",
      subtitle: "Network Monitoring & Security Inspection Tool",
      description: "Real-time network traffic sniffer and analyzer built with Scapy to decode TCP/IP packet payloads, detect malicious signatures, and visualize network statistics.",
      features: [
        "Live network interface packet capture",
        "Multi-protocol decoding (IP, TCP, UDP, ICMP, HTTP)",
        "Malformed packet & SYN flood detection",
        "Real-time bandwidth usage & port scanning analytics",
        "PCAP file export and payload hex inspection"
      ],
      tech: ["Python", "Networking", "Scapy", "Wireshark", "Express.js"],
      category: "Cybersecurity",
      featured: true,
      image: "packet_analyzer",
      githubUrl: "https://github.com/HibaShaik13/Network-Packet-Analyzer",
      demoUrl: "#demo-packet"
    },
    {
      id: "skill-nova",
      title: "Skill Nova",
      subtitle: "AI-Powered Resume & ATS Analysis Platform",
      description: "Smart career intelligence tool leveraging NLP and LLMs to parse resumes, benchmark against target job descriptions, calculate ATS compatibility, and highlight skill gaps.",
      features: [
        "Deep PDF/Docx resume parsing & section extraction",
        "ATS score algorithm with keyword density mapping",
        "Skill gap detection & targeted learning roadmap",
        "Job description context match scoring",
        "AI bullet point rewrite suggestions for impact"
      ],
      tech: ["React", "Python", "NLP", "AI", "Streamlit", "Node.js"],
      category: "AI",
      featured: false,
      image: "skill_nova",
      githubUrl: "https://github.com/HibaShaik13/Skill-Nova",
      demoUrl: "#demo-skillnova"
    },
    {
      id: "smart-road-planning",
      title: "Smart Road Planning System",
      subtitle: "MST-Based Infrastructure Optimization",
      description: "Graph algorithm visualizer utilizing Prim's and Kruskal's Minimum Spanning Tree (MST) to calculate optimal road network connectivity while minimizing construction costs.",
      features: [
        "Interactive node graph placement & distance weighting",
        "Prim's and Kruskal's MST step-by-step algorithm animation",
        "Cost optimization and efficiency metrics",
        "Custom canvas rendering with interactive edge editing"
      ],
      tech: ["HTML", "CSS", "JavaScript", "React", "Graph Theory"],
      category: "Tools",
      featured: false,
      image: "road_planning",
      githubUrl: "https://github.com/HibaShaik13/Prims_smart_road_planner",
      demoUrl: "https://prims-smart-road-planner-mst-frontend.onrender.com/"
    }
  ] as Project[],

  skills: {
    programming: [
      { name: "Python", icon: "Python" },
      { name: "C", icon: "Code" },
      { name: "JavaScript", icon: "Js" },
      { name: "TypeScript", icon: "Ts" }
    ],
    frontend: [
      { name: "HTML5", icon: "Html" },
      { name: "CSS3", icon: "Css" },
      { name: "React.js", icon: "React" },
      { name: "Tailwind CSS", icon: "Tailwind" },
      { name: "Vite", icon: "Vite" },
      { name: "Redux", icon: "Redux" }
    ],
    backend: [
      { name: "Node.js", icon: "Node" },
      { name: "Express.js", icon: "Express" },
      { name: "Python", icon: "Python" },
      { name: "Flask", icon: "Flask" },
      { name: "FastAPI", icon: "FastAPI" }
    ],
    databases: [
      { name: "MongoDB", icon: "Mongo" },
      { name: "PostgreSQL", icon: "Postgres" },
      { name: "MySQL", icon: "MySql" },
      { name: "Redis", icon: "Redis" }
    ],
    cybersecurity: [
      { name: "Ethical Hacking", icon: "Shield" },
      { name: "Network Security", icon: "Network" },
      { name: "API Security", icon: "Lock" },
      { name: "Vulnerability Analysis", icon: "Search" },
      { name: "Encryption (AES/RSA)", icon: "Key" },
      { name: "Threat Detection", icon: "AlertTriangle" },
      { name: "CAN Bus Security", icon: "Cpu" }
    ],
    aiMl: [
      { name: "Machine Learning", icon: "Brain" },
      { name: "NLP", icon: "MessageSquare" },
      { name: "Generative AI", icon: "Sparkles" },
      { name: "AI Agents", icon: "Bot" },
      { name: "LLM APIs", icon: "Zap" },
      { name: "TensorFlow Lite", icon: "Activity" }
    ],
    tools: [
      { name: "Git", icon: "Git" },
      { name: "GitHub", icon: "Github" },
      { name: "VS Code", icon: "Terminal" },
      { name: "Postman", icon: "Send" },
      { name: "Docker", icon: "Box" },
      { name: "Linux / Bash", icon: "Terminal" },
      { name: "MongoDB Compass", icon: "Database" }
    ]
  },

  experiences: [
    {
      role: "Cybersecurity Intern",
      company: "Prodigy Infotech",
      period: "Jan 2025 – Mar 2025",
      tag: "Internship",
      description: [
        "Executed network security audits, vulnerability assessments, and encryption algorithm research.",
        "Engineered custom Python tools for network packet inspection and secure file encryption workflows.",
        "Gained rigorous hands-on experience in threat modeling, OWASP Top 10 mitigation, and attack simulation labs."
      ]
    },
    {
      role: "Intel AI for Future Workforce Bootcamp",
      company: "Intel & Digital India",
      period: "June 5 – 6, 2026",
      tag: "Bootcamp",
      description: [
        "Architected multi-agent collaborative systems utilizing Large Language Models (LLMs).",
        "Engineered end-to-end automated research pipelines for text extraction, synthesis, and hypothesis validation."
      ]
    },
    {
      role: "Tata Technologies InnoVent 2026",
      company: "Tata Technologies",
      period: "2026",
      tag: "Hackathon / Challenge",
      description: [
        "Built SentinelDrive, an Edge AI-based security platform for Software-Defined Vehicles (SDVs).",
        "Focused on real-time CAN Bus Intrusion Detection, ECU Fingerprinting, and sensor anomaly classification."
      ]
    }
  ] as Experience[],

  certifications: [
    {
      id: "cert-1",
      title: "Cybersecurity Essentials",
      organization: "Cisco Networking Academy",
      date: "May 2025",
      skillsLearned: ["Network Defense", "Threat Analysis", "Cryptography Basics", "Security Protocols"],
      credentialUrl: "https://www.credly.com"
    },
    {
      id: "cert-2",
      title: "Python for Everybody",
      organization: "Coursera / University of Michigan",
      date: "Feb 2025",
      skillsLearned: ["Python Data Structures", "Web Scraping", "API Integration", "Database Design"],
      credentialUrl: "https://coursera.org"
    },
    {
      id: "cert-3",
      title: "Ethical Hacking Basics",
      organization: "Great Learning",
      date: "Jan 2025",
      skillsLearned: ["Penetration Testing", "Reconnaissance", "System Hacking", "Vulnerability Scanning"],
      credentialUrl: "https://greatlearning.in"
    },
    {
      id: "cert-4",
      title: "Introduction to Generative AI",
      organization: "Google Cloud",
      date: "Sep 2025",
      skillsLearned: ["Generative AI", "Large Language Models", "Google Cloud AI", "Prompt Engineering"],
      credentialUrl: "https://cloud.google.com"
    }
  ] as Certification[],

  achievements: [
    {
      title: "Top 10 Finalist",
      event: "Smart India Hackathon 2024",
      year: "2024",
      badge: "National Level",
      iconName: "Trophy"
    },
    {
      title: "Finalist",
      event: "Tata Technologies InnoVent 2026",
      year: "2026",
      badge: "Automotive Security",
      iconName: "Award"
    },
    {
      title: "Participant",
      event: "Intel AI Bootcamp 2026",
      year: "2026",
      badge: "Multi-Agent AI",
      iconName: "Zap"
    },
    {
      title: "Runner Up",
      event: "College Hackathon 2025",
      year: "2025",
      badge: "Full Stack Innovation",
      iconName: "Medal"
    },
    {
      title: "Top Performer",
      event: "Cybersecurity Workshop",
      year: "2025",
      badge: "Network Security",
      iconName: "Star"
    },
    {
      title: "Active Member",
      event: "Google Developer Student Club (GDSC)",
      year: "2024 - Present",
      badge: "Community Leader",
      iconName: "Users"
    }
  ] as Achievement[],

  codingProfiles: [
    {
      platform: "GitHub",
      username: "@HibaShaik13",
      statPrimary: "32 Repositories",
      statSecondary: "Active Contributions & Open Source",
      profileUrl: "https://github.com/HibaShaik13",
      icon: "github",
      color: "from-purple-500 to-indigo-600"
    },
    {
      platform: "LeetCode",
      username: "@Shaik_Hiba",
      statPrimary: "200+ Problems Solved",
      statSecondary: "Data Structures & Algorithms",
      profileUrl: "https://leetcode.com/u/Shaik_Hiba/",
      icon: "leetcode",
      color: "from-amber-500 to-orange-600"
    },
    {
      platform: "CodeChef",
      username: "@vu241fa04495",
      statPrimary: "Competitive Programmer",
      statSecondary: "Algorithms & Problem Solving",
      profileUrl: "https://www.codechef.com/users/vu241fa04495",
      icon: "codechef",
      color: "from-amber-500 to-orange-600"
    },
    {
      platform: "LinkedIn",
      username: "Hiba Tharunnum Shaik",
      statPrimary: "Professional Network",
      statSecondary: "Cybersecurity & Software Engineering",
      profileUrl: "https://www.linkedin.com/in/hiba-tharunnum-shaik-60a33b393/",
      icon: "linkedin",
      color: "from-blue-500 to-cyan-600"
    },
    {
      platform: "TryHackMe",
      username: "shaikhibatharunnum",
      statPrimary: "2 Rooms Completed",
      statSecondary: "Cybersecurity & Ethical Hacking",
      profileUrl: "https://tryhackme.com/p/shaikhibatharunnum",
      icon: "tryhackme",
      color: "from-rose-500 to-red-600"
    },
    {
      platform: "Hack The Box",
      username: "@ShaikHiba",
      statPrimary: "Just started my career",
      statSecondary: "Penetration Testing Practice",
      profileUrl: "https://profile.hackthebox.com/profile/019ea5d1-caad-718a-8e65-cb21237c123e",
      icon: "hackthebox",
      color: "from-emerald-500 to-teal-600"
    }
  ] as CodingProfile[]
};
