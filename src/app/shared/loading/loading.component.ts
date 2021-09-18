import {Component, Input, OnInit} from '@angular/core';
import {CommonService} from "../../core/service/common.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  @Input() loading?: boolean;
}
