export interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  link: string;
  linkname: string;
}

export interface Tool {
  name: string;
  icon?: string;
}