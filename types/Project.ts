export interface Project {
  id: number;
  name: string;
  short: string;
  problem: string;
  img: string;
  link?: string;
  description: string;
  launch?: string;
  techStack: string[];
  impact: string;
  featured?: boolean;
}
