import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../User';
import { NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   userInfo: any;
   result: any;

  loginForm: LoginForm = {
    username: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private chat: ChatService,
    private router: Router
  ) { }

  signIn(form) {
      console.log(form);
      this.loginForm = {username: form.badge, password: form.password};
      this.result = this.chat.login(this.loginForm).then(
        res => this.result = res
      );
      console.log('Inside signIn() function');
      console.log(this.result);
    }

  reset() {
      this.loginForm = {username: '', password: ''};
  }

  ngOnInit() {
  }

}
