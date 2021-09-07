import {Component, Input, OnInit} from '@angular/core';
import {CommonService} from "../../core/service/common.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  isLoading = false;

  constructor(
    private commonService: CommonService
  ) {
    this.commonService.progressEvent.subscribe((data: boolean) => this.isLoading = data);
  }

  ngOnInit(): void {
  }


}
