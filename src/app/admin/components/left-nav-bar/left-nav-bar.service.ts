import { Injectable } from '@angular/core';
import {AdminConstants} from "../../constant";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LeftNavBarService {

  adminConstants = AdminConstants;
  activeTabSubject = new BehaviorSubject(this.adminConstants.DASH_BOARD);


  constructor() {}

  setActiveTab(tab: AdminConstants) {
    this.activeTabSubject.next(tab);
  }

  getActiveTab() {
    return this.activeTabSubject.asObservable();
  }
}
