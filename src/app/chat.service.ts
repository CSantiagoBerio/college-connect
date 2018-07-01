import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { User, LoginForm } from './User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  apiRoot = 'http://jechat-restapi.herokuapp.com/JEChat';
  result: any;

  login(form) {
    console.log(form);
    console.log('Starting login() function');
    return this.http.post(this.apiRoot + '/login', form ).toPromise().then( res => JSON.stringify(res.User));
  }

  constructor(private http: HttpClient, private router: Router) {}

}
