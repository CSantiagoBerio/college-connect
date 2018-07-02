import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: User = {
    usrid: 0,
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    username: ''
  };

  id: any;

  loadProfile() {
    this.user.loadProfile(this.id).subscribe(
      res => {
        this.profile = res['User'];
      }
    );
  }

  goBack() {
    this.location.back();
  }

  constructor(
    private http: HttpClient,
    private user: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadProfile();
  }

}
