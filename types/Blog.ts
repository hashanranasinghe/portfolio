// types/BlogPost.ts
export interface BlogPost {
  id: number;
  title: string;
  date: string;
  categories: string[];
  author: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  link: string;
}