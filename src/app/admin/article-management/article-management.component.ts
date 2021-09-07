import { Component, OnInit } from '@angular/core';
import {Article} from "../../shared/shared.constant";
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
      method: 'GET',
      url: 'v1/articles/os/' + ofset,
      progress: true,
      success: (data: any) => {
        this.listArticle = data;
      }
    })
  }

  onDeleteArticle() {
    this.showModal = true;
    console.log('on delete')
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
}
