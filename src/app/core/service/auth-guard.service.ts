import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    public auth: AuthService,
    public router: Router
  ) {}

  canActivate(): boolean {
    console.log('-----> can active', this.auth.isAuthenticated());
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
