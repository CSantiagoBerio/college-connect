import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../User';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  loginForm: FormGroup;

  constructor(
    private http: HttpClient,
    private login: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  signIn() {
      console.log(this.loginForm.value);
      this.result = this.login.login(this.loginForm.value)
      .then(res => console.log(res))
      .catch(error => alert(error));
      this.loginForm.reset();
    }

  register() {
      this.router.navigate(['/CConnect/register']);
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
