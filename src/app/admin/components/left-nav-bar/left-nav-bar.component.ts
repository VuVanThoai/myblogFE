import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AdminConstants} from "../../constant";
import {LeftNavBarService} from "./left-nav-bar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.scss']
})
export class LeftNavBarComponent implements OnInit {
  adminContants = AdminConstants;
  tab = AdminConstants.DASH_BOARD;

  constructor(
    private leftNavBarService: LeftNavBarService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.leftNavBarService.getActiveTab().subscribe((tab) => {
      this.tab = tab;
    })
  }

  onChangeTab(tab: AdminConstants, urlNavigate: string) {
    this.tab = tab;
    this.leftNavBarService.setActiveTab(tab);
    this.router.navigate([urlNavigate]);
  }

}
