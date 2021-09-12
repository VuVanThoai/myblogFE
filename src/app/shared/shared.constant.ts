export interface Category {
  id: number;
  name: string;
  shortUrl: string
}

export interface Article {
  id?: number;
  idCategory: number;
  nameCategory: string;
  url: string;
  imgInstead: string;
  title: string;
  body: string;
  tag: string;
  createDate: Date;
  view: number;
  comment: number;
}

export interface Comment {
  id?: number;
  idArticle: number;
  clientName?: string;
  comment: string;
  createDate: Date
}

export const Categories = [
  {
    id: 1,
    name: 'Giải trí',
    shortUrl: 'giai-tri'
  },
  {
    id: 2,
    name: 'Tin vắn',
    shortUrl: 'tin-van'
  },
  {
    id: 3,
    name: 'Khoa học công nghệ',
    shortUrl: 'khoa-hoc-cong-nghe'
  },
  {
    id: 4,
    name: 'Thể thao',
    shortUrl: 'the-thao'
  },
  {
    id: 5,
    name: 'Pháp luật',
    shortUrl: 'phap-luat'
  },
  {
    id: 6,
    name: 'Y học',
    shortUrl: 'y-hoc'
  },
  {
    id: 7,
    name: 'MMO',
    shortUrl: 'mmo'
  },
  {
    id: 8,
    name: 'Săn sale',
    shortUrl: 'sale'
  }
] as Array<Category>;

export interface OptionCallAPI {
  url: string;
  method: MethodApi;
  progress?: boolean;
  contentType?: string;
  timeoutSeconds?: number;
  data?: any;
  success?: object;
  error?: object;
}

export enum MethodApi {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}
