import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../User';
import { NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CompileNgModuleMetadata } from '@angular/compiler';
import { reject } from 'q';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   userInfo: any;
   result: any;

  loginForm: any;

  constructor(
    private http: HttpClient,
    private login: LoginService,
    private router: Router
  ) { }

  signIn(form) {
      console.log(form);
      this.loginForm = {username: form.badge, password: form.password};
      this.result = this.login.login(this.loginForm)
      .then(res => console.log(res))
      .catch(error => alert(error));
      this.loginForm = [];
    }

  register() {
      this.router.navigate(['/CConnect/register']);
  }

  ngOnInit() {
  }

}
