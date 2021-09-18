import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Article, Categories, Category, MethodApi} from "../../shared/shared.constant";
import {CommonService} from "../../core/service/common.service";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-articles-category',
  templateUrl: './articles-category.component.html',
  styleUrls: ['./articles-category.component.scss']
})
export class ArticlesCategoryComponent implements OnInit {

  categories = Categories;
  urlCategory: string = '';
  categoryByShortUrl?: Category;
  listArticlesByCategory: Array<Article> = [];
  listNewArticle?: Array<Article>;
  showModal = false;
  offsetLoadMore = 0;
  loading = true;

  constructor(
    private readonly route: ActivatedRoute,
    private commonService: CommonService,
    private router: Router,
    private pageTitle: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.urlCategory = value.get('categoryUrl') || '';
      this.getCategoryByShortUrl(this.urlCategory);
      if (this.categoryByShortUrl === undefined) {
        this.router.navigate(['/error']);
      }
      this.listArticlesByCategory = [];
      this.showModal = false;
      this.offsetLoadMore = 0;
      this.pageTitle.setTitle('Đây là trang tổng hợp thông tin với chủ đề ' + this.categoryByShortUrl?.name);
      this.meta.updateTag({name: 'description', content: 'Đây là trang tổng hợp thông tin với chủ đề ' + this.categoryByShortUrl?.name} )
      this.getListArticlesByIdCategoryOffset(0);
      this.getListNewArticles();
    })
  }

  getListNewArticles() {
    this.commonService.callApi({
      method: MethodApi.GET,
      url: 'v1/articles/os/0',
      progress: true,
      success: (data: Array<Article>) => {
        this.loading = false;
        this.listNewArticle = data;
      },
      error: (error: any) => {
        this.loading = false;
        this.showModal = true;
      }
    })
  }

  getListArticlesByIdCategoryOffset(offset: number) {
    const idCategory = this.categoryByShortUrl?.id;
    this.commonService.callApi({
      url: 'v1/articles/' + idCategory + '?offset='+ offset,
      method: MethodApi.GET,
      progress: true,
      success: (data: Array<Article>) => {
        this.listArticlesByCategory = [...this.listArticlesByCategory, ...data];
      },
      error: (error: any) => {
      }
    })
  }

  getCategoryByShortUrl(shortUrl: string) {
    this.categoryByShortUrl = this.categories.find(category => {
      return category.shortUrl === shortUrl
    });
  }

  loadMoreArticles() {
    this.offsetLoadMore++;
    this.getListArticlesByIdCategoryOffset(this.offsetLoadMore * 20);
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.loadMoreArticles();
    }
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }
}
