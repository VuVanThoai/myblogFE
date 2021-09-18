import {Component, HostListener, OnInit} from '@angular/core';
import {CommonService} from "../core/service/common.service";
import {Article, MethodApi} from "../shared/shared.constant";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  listNewArticle?: Article[];
  listArticlesHeightView?: Array<Article>;
  showModal = false;
  offsetLoadMore = 0;
  loading = true;

  constructor(
    private commonService: CommonService,
    private pageTitle: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.pageTitle.setTitle('Giaitrivn247.com là website cập nhật các thông tin giải trí trong và ngoài nước từng ngày, ngoài ra còn có các kiến thức hữu ích trong cuộc sống như khoa học công nghệ, y học, MMO hay săn sale cho mọi người mua đồ trên các sàn thương mại điện tử.');
    this.meta.updateTag({name: 'description', content: 'Giaitrivn247.com là website cập nhật các thông tin giải trí trong và ngoài nước từng ngày, ngoài ra còn có các kiến thức hữu ích trong cuộc sống như khoa học công nghệ, y học, MMO hay săn sale cho mọi người mua đồ trên các sàn thương mại điện tử.'} )
    this.getListArticlesHeightView();
    this.getListNewArticlesLoadMoreOffset(0);
  }

  getListArticlesHeightView() {
    this.commonService.callApi({
      method: MethodApi.GET,
      url: 'v1/articles/height-view/main',
      progress: true,
      success: (data: Array<Article>) => {
        this.loading = false;
        this.listArticlesHeightView = data;
      },
      error: (error: any) => {
        this.loading = false;
        this.showModal = true;
      }
    })
  }

  getListNewArticlesLoadMoreOffset(offset: number) {
    this.commonService.callApi({
      method: MethodApi.GET,
      url: 'v1/articles/os/' + offset,
      progress: true,
      success: (data: Array<Article>) => {
        this.loading = false;
        this.listNewArticle = this.listNewArticle ? [...this.listNewArticle, ...data] : data;
      },
      error: (error: any) => {
        this.loading = false;
        this.showModal = true;
      }
    })
  }

  loadMoreArticles() {
    this.offsetLoadMore++;
    this.getListNewArticlesLoadMoreOffset(this.offsetLoadMore * 20);
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
