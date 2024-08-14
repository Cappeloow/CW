export interface ICategory {
  categoryName: string;
  projects: IProject[];
}

export interface IProject {
    name: string;
    description: string;
    img: string;
    url?: string;
    techStack?: string[];
    duration?: string;
}