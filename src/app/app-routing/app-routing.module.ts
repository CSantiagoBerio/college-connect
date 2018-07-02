import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'CConnect/home', pathMatch: 'full'},
  {path: 'CConnect/home', component: HomeComponent},
  {path: 'CConnect/login', component: LoginComponent},
  {path: 'CConnect/:id/profile', component: ProfileComponent},
  {path: 'CConnect/register', component: RegisterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
