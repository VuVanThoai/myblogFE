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
    name: 'Đọc truyện online',
    shortUrl: 'doc-truyen-online'
  },
  {
    id: 3,
    name: 'Phim hay',
    shortUrl: 'phim-hay'
  },
  {
    id: 4,
    name: 'Thủ thuật phần mềm',
    shortUrl: 'thu-thuat-phan-mem'
  },
  {
    id: 5,
    name: 'Kiếm tiền online',
    shortUrl: 'mmo'
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
