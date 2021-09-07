import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommonService} from "../core/service/common.service";
import {Article} from "../shared/shared.constant";

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit {

  article?: Article;

  constructor(
    private route: ActivatedRoute,
    private readonly commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      console.log(parseInt(value.get('urlArticle') || ''));
      this.getArticleByUrl(value.get('urlArticle') || '');
    })
  }

  getArticleByUrl(url: string) {
    this.commonService.callApi({
      method: 'GET',
      url: 'v1/article/url/' + url,
      progress: true,
      success: (article: Article) => {
        this.article = article;
      }
    })
  }

}
