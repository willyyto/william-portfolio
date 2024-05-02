export interface IDefaultComponentProps {
  title: string;
  description: string;
  data: any;
  btn_name: string;
  btn_href: string;
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
