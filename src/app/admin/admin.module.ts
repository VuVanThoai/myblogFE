import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from "./admin.component";
import {DasboardComponent} from './dasboard/dasboard.component';
import {CreateArticleComponent} from './create-article/create-article.component';
import {ArticleManagementComponent} from './article-management/article-management.component';
import {ArticleStatisticalComponent} from './article-statistical/article-statistical.component';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ArticleReviewComponent} from './article-review/article-review.component';
import {LeftNavBarComponent} from "./components/left-nav-bar/left-nav-bar.component";
import {TopMenuComponent} from "./components/top-menu/top-menu.component";

@NgModule({
  declarations: [AdminComponent, DasboardComponent, CreateArticleComponent, ArticleManagementComponent, ArticleStatisticalComponent, ArticleReviewComponent, LeftNavBarComponent, TopMenuComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminModule {
}
