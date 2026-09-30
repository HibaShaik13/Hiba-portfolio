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

export interface PortfolioData {
  profile: {
    name: string;
    shortName: string;
    title: string;
    bio: string;
    availability: string;
    location: string;
    education: string;
    cgpa: string;
    email: string;
    contactEmail: string;
    socials: {
      github: string;
      linkedin: string;
      leetcode: string;
      codechef: string;
      hackerrank: string;
    };
    stats: {
      projectsBuilt: string;
      certifications: string;
      dsaSolved: string;
      hackathons: string;
    };
  };
  projects: Project[];
  skills: Record<string, { name: string; icon: string }[]>;
  experiences: Experience[];
  certifications: Certification[];
  achievements: Achievement[];
  codingProfiles: CodingProfile[];
}
