import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommonService} from "../core/service/common.service";
import {Router} from "@angular/router";
import {MethodApi} from "../shared/shared.constant";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onLogin() {
    const requestBody = this.formLogin.value;
    this.commonService.callApi({
      method: MethodApi.POST,
      url: 'auth',
      progress: true,
      data: requestBody,
      success: (data: any) => {
        localStorage.setItem('token', data.accessToken);
        this.router.navigate(['/admin/dashboard']);
      },
      error: (error: any) => {

      }
    })
  }

}
