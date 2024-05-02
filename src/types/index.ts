export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string[];
}

export interface IExperience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface ISkill {
  name: string;
  percentage: number;
}

export interface ISkills {
  title: string;
  details: ISkill[];
}

export interface IProject {
  title: string;
  isFeatured: boolean;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
}
export interface IProjects {
  projects: IProject[];
}

export interface IProjectDetails {
  projectDetail: IProject;
}
