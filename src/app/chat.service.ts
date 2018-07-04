import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRoot } from './User';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  url = apiRoot;

  messages(id, groupname) {
    const promise = new Promise((resolve, reject) => {
      this.http.get(this.url + id + '/GroupChats/' + groupname).toPromise().then(
        response => {
          console.log(response);
          resolve(response);
        },
        error => {
          reject(error);
        }
      );
    });
    return promise;
  }

  constructor(private http: HttpClient) { }
}
