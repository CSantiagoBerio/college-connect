import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: any;
    repassword: string;

  goBack() {
    this.router.navigate(['/CConnect/login']);
  }

  register(form, repassword) {

  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
