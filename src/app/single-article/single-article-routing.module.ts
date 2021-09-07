import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SingleArticleComponent} from "./single-article.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':urlArticle',
        component: SingleArticleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleArticleRoutingModule { }
