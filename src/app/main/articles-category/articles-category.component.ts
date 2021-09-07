import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Article, Categories, Category} from "../../shared/shared.constant";
import {CommonService} from "../../core/service/common.service";
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-articles-category',
  templateUrl: './articles-category.component.html',
  styleUrls: ['./articles-category.component.scss']
})
export class ArticlesCategoryComponent implements OnInit {

  urlCategory: string = '';
  articles: Array<Article> = [];
  categories = Categories;

  constructor(
    private readonly route: ActivatedRoute,
    private commonService: CommonService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.urlCategory = value.get('categoryUrl') || '';
      console.log(this.urlCategory)
      this.getListArticlesByIdCategory(this.urlCategory);
    })
  }

  getListArticlesByIdCategory(shortUrl: string) {
    const idCategory = this.getIdCategoryByShortUrl(shortUrl);
    console.log(idCategory);
    this.commonService.callApi({
      url: 'v1/articles/' + idCategory,
      method: 'GET',
      progress: true,
      success: (data: Array<Article>) => {
        console.log(data)
        this.articles = data;
      },
      error: (error: any) => {

      }
    })
  }

  getIdCategoryByShortUrl(shortUrl: string) {
    return (this.categories.find(category => {
      console.log(shortUrl);
      console.log(category.shortUrl);
      return category.shortUrl === shortUrl
    }))?.id;
  }

}
