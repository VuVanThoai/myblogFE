import { Component, OnInit } from '@angular/core';
import {Article} from "../../shared/shared.constant";
import {ArticleService} from "../../core/service/article.service";

@Component({
  selector: 'app-article-review',
  templateUrl: './article-review.component.html',
  styleUrls: ['./article-review.component.scss']
})
export class ArticleReviewComponent implements OnInit {

  articleInfo!: Article;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.articleInfo = this.articleService.getArticleInfo()!;
  }

}
