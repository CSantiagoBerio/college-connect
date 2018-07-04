import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { apiRoot } from './User';

@Injectable({
  providedIn: 'root'
})
export class GroupchatService {

  groupList: any;
  url = apiRoot;

  loadGroups(id) {
    console.log(id);
    const promise = new Promise((resolve, reject)  => {
      this.http.get(this.url + id + '/GroupChats').toPromise().then(
        response => {
          this.groupList = response['Groupchats'];
          if (typeof this.groupList === 'undefined') {
              alert(response['ERROR']);
          } else {
            console.log('info: ' + JSON.stringify(response));
            resolve(response['Groupchats']);
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

  newGroup(groupname, id) {
    const promise = new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/GroupChats', groupname).toPromise().then(
        response => {
          console.log(response);
          resolve(response)
;        },
        error => {
          alert('Something went wrong while fetching the data requested');
          reject(error);
        }
      );
    });
    return promise;
  }

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
   }
}
