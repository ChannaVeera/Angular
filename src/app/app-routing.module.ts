import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent}from './component/login/login.component'
import{RegisterComponent}from './component/register/register.component'
import{ForgotpasswordComponent}from './component/forgotpassword/forgotpassword.component'
import{SetPasswordComponent} from './component/set-password/set-password.component'
import{DashboardComponent } from './component/dashboard/dashboard.component'
import {LableComponentComponent  } from './component/lable-component/lable-component.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
    
  },

  {
    path:'register',
    component:RegisterComponent
  },
  {
    path :"forgotPassword",
    component:ForgotpasswordComponent
  },
  {
    path:"setPassword/:token",
    component:SetPasswordComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"allLabels",
    component:LableComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function newFunction(): string {
  return "setPassword";
}

