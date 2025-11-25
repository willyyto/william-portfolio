
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  tech: string;
  description: string[];
  link?: string;
  github?: string;
  image?: string;
  video?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ResearchItem {
  title: string;
  institution: string;
  date: string;
  description: string;
  link?: string;
  image?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  avatar?: string;
  resumeUrl?: string;
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  summary: string;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  research: ResearchItem[];
  education: {
    institution: string;
    degree: string;
    gpa: string;
  };
}