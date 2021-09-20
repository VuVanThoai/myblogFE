import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DasboardComponent} from "./dasboard/dasboard.component";
import {ArticleManagementComponent} from "./article-management/article-management.component";
import {CreateArticleComponent} from "./create-article/create-article.component";
import {ArticleStatisticalComponent} from "./article-statistical/article-statistical.component";
import {AuthGuardService} from "../core/service/auth-guard.service";
import {AdminComponent} from "./admin.component";
import {ArticleReviewComponent} from "./article-review/article-review.component";

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DasboardComponent,
      },
      {
        path: 'article-management',
        component: ArticleManagementComponent,
      },
      {
        path: 'create-article',
        component: CreateArticleComponent
      },
      {
        path: 'update-article/:idArticle',
        component: CreateArticleComponent
      },
      {
        path: 'article-statistical',
        component: ArticleStatisticalComponent
      },
      {
        path: 'create-article/review',
        component: ArticleReviewComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
