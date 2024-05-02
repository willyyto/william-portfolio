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

export interface IExperiences {
    title: string;
    data: IExperience[];
}

export interface IExperience {
    name: string;
    location: string;
    startDate: string;
    endDate: string;
    descriptions: string[];
    description: string[];
    projects: IProjectExperience[];
}

export interface IProjectExperiences {
    data: IProjectExperience[];
}

export interface IProjectExperience {
    name: string;
    location: string;
    descriptions: string[];
}
