import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatService } from '../chat.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    username: ''
  };

  showUser() {
    console.log(this.profile);
  }

  constructor(private http: HttpClient, private chat: ChatService) { }

  ngOnInit() {
    this.showUser();
  }

}
