export interface IArticle {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

export interface IFilter {
  page: number
}