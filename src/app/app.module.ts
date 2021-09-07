import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {SharedModule} from "./shared/shared.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { SingleArticleComponent } from './single-article/single-article.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SingleArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
