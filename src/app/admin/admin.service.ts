import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Article} from "../shared/shared.constant";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private articleStore: BehaviorSubject<Article> = new BehaviorSubject<Article>({
    idCategory: 0,
    nameCategory: 'Giải trí',
    url: 'string',
    imgInstead: 'string',
    title: 'string',
    body: 'string',
    tag: 'string',
    createDate: new Date(),
    view: 1,
    comment: 0
  });

  setArticleStore(article: Article) {
    console.log('-----set article to store')
    this.articleStore.next(article);
  }

  getArticleStore() {
    return this.articleStore.asObservable();
  }
}
