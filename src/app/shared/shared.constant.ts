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
    name: 'Khoa học và đời sống',
    shortUrl: 'khoa-hoc-va-doi-song'
  },
  {
    id: 3,
    name: 'Ảnh nghệ thuật',
    shortUrl: 'anh-nghe-thuat'
  },
  {
    id: 4,
    name: 'Kiếm tiền online',
    shortUrl: 'mmo'
  },
  {
    id: 5,
    name: 'Săn sale',
    shortUrl: 'big-sale'
  },
  {
    id: 6,
    name: 'Kiến thức cuộc sống',
    shortUrl: 'kien-thuc-cuoc-song'
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
