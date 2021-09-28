import {Component, OnInit} from '@angular/core';
import {CommonService} from "../core/service/common.service";
import {Article, MethodApi} from "../shared/shared.constant";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  loading = false;
  listArticlesBySearch: Article[] = [];
  key = '';

  constructor(
    private commonService: CommonService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.key = this.route.snapshot.queryParamMap.get('key') || '';
    console.log('key = ', this.key);
    this.getListArticleBySearch(this.key, 0);
  }

  getListArticleBySearch(key: string, offset: number) {
    this.commonService.callApi({
      method: MethodApi.GET,
      url: 'v1/articles/search?key=' + key + '&offset=' + offset,
      success: (data: Array<Article>) => {
        this.listArticlesBySearch = data;
      }
    })
  }

}
