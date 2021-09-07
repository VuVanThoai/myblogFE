import { Component, OnInit } from '@angular/core';
import {AdminConstants} from "./constant";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  adminContants = AdminConstants;
  tab = this.adminContants.DASH_BOARD;
  constructor() { }

  ngOnInit(): void {
  }

  onChangeTab(tab: AdminConstants) {
    this.tab = tab;
  }

}
