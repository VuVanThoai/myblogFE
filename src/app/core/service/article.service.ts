import { Injectable } from '@angular/core';
import {Article} from "../../shared/shared.constant";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleInfo?: Article;

  setArticleInfo(article: Article) {
    this.articleInfo = article;
  }

  getArticleInfo() {
    return this.articleInfo;
  }

}
