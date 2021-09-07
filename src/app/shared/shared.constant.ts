export interface Category {
  id: number;
  name: string;
  shortUrl: string
}

export interface Article {
  id?: number;
  idCategory: number;
  url: string;
  imgInstead: string;
  title: string;
  body: string;
  tag: string;
  createDate: Date;
  view: number;
}

export const Categories = [
    {
      id: 1,
      name: 'Giải trí',
      shortUrl: 'giai-tri'
    },
    {
      id: 4,
      name: 'Khoa học công nghệ',
      shortUrl: 'khoa-hoc-cong-nghe'
    },
    {
      id: 5,
      name: 'Thể thao',
      shortUrl: 'the-thao'
    },
    {
      id: 2,
      name: 'Pháp luật',
      shortUrl: 'phap-luat'
    },
    {
      id: 3,
      name: 'Y học',
      shortUrl: 'y-hoc'
    },
    {
      id: 6,
      name: 'MMO',
      shortUrl: 'mmo'
    },
    {
      id: 7,
      name: 'Săn sale',
      shortUrl: 'sale'
    }
  ] as Array<Category>;

export interface OptionCallAPI {
  url: string;
  method: string;
  progress?: boolean;
  contentType?: string;
  timeoutSeconds?: number;
  data?: any;
  success?: object;
  error?: object;
}
