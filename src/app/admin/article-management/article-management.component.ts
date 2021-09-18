import {Component, OnInit} from '@angular/core';
import {Article, MethodApi} from "../../shared/shared.constant";
import {CommonService} from "../../core/service/common.service";
import {AdminService} from "../admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-management',
  templateUrl: './article-management.component.html',
  styleUrls: ['./article-management.component.scss']
})
export class ArticleManagementComponent implements OnInit {

  listArticle: Array<Article> = [];
  showModal = false;
  indexActivePaging = 0;
  listPaging = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private commonService: CommonService,
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListArticleByOfset(0);
  }

  getListArticleByOfset(ofset: number) {
    this.commonService.callApi({
      method: MethodApi.GET,
      url: 'v1/articles/os/' + ofset,
      progress: true,
      success: (data: Array<Article>) => {
        this.listArticle = data;
      }
    })
  }

  onDeleteArticle() {
    this.showModal = true;
  }

  onOnfirmDeleteArticle() {
    this.showModal = false;
  }

  onEditArticle(article: Article) {
    this.adminService.setArticleStore(article);
    // this.router.navigate([]).then(result => {  window.open('http://localhost:4200/admin/create-article', '_blank'); });
    // const url = this.router.serializeUrl(
    //   this.router.createUrlTree([`/admin/create-article`])
    // );
    // this.adminService.getArticleStore().subscribe((value) => {
    //   console.log('value = ', value);
    // })
    // window.open(url, '_blank');
    this.router.navigate(['/admin/update-article/' + article.id])
  }

  onCLickPaging(index: number) {
    this.indexActivePaging = index;
    this.getListArticleByOfset(index * 18);
  }

  onSearch(keySearch: any) {
    this.commonService.callApi({
      method: MethodApi.GET,
      url: 'v1/search?key=' + keySearch + '&offset=0',
      success: (data: Array<Article>) => {
        this.listArticle = data;
      }
    })
  }
}
