import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  result: any;
  apiRoot = 'http://jechat-restapi.herokuapp.com/JEChat/';


  login(form) {
    const promise = new Promise((resolve, reject)  => {
      this.http.post(this.apiRoot + 'login', form).toPromise().then(
        response => {
          this.result = response['User'];
          if (typeof this.result === 'undefined') {
              alert(response['ERROR']);
          } else {
            console.log('info: ' + JSON.stringify(response));
            resolve(response['User']);
            this.router.navigate(['/CConnect/' + this.result['usrid'] + '/profile']);
          }
        },
        error => {
            alert('Something went wrong while fetching the data requested');
            reject(error['ERROR']);
        }
      );

    });
    return promise;
  }

  register(form) {
    const promise = new Promise((resolve, reject)  => {
      this.http.post(this.apiRoot + 'register', form).toPromise().then(
        response => {
          this.result = response['User'];
          if (typeof this.result === 'undefined') {
              alert(response['ERROR']);
          } else {
            console.log('info: ' + JSON.stringify(response));
            resolve(response['User']);
            alert('Register Succesful');
            this.router.navigate(['/CConnect/login']);
          }
        },
        error => {
            alert('Something went wrong while fetching the data requested\n' + error.status);
            reject(error['ERROR']);
        }
      );

    });
    return promise;
  }

  constructor(private http: HttpClient, private router: Router) { }
}
