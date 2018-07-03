import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  goBack() {
    this.router.navigate(['/CConnect/login']);
  }

  register() {
    this.log.register(this.registerForm.value);
  }

  constructor(private router: Router, private fb: FormBuilder, private log: LoginService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ['', [
        Validators.required
      ]],
      lastname: ['', [
        Validators.required
      ]],
      phone: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]],
    },
    Validators.required);

    // this.registerForm.valueChanges.subscribe(console.log);
  }

  get firstname() {
    return this.registerForm.get('firstname');
  }

  get lastname() {
    return this.registerForm.get('lastname');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get password() {
    return this.registerForm.get('password');
  }

}
