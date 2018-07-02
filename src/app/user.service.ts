import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { User, LoginForm } from './User';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiRoot = 'http://jechat-restapi.herokuapp.com/JEChat/';
  result: any;

  loadProfile(id: number) {
    return this.http.get<User>(this.apiRoot + id);
  }

  constructor(private http: HttpClient, private router: Router) {}

}
