import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent}from './component/login/login.component'
import{RegisterComponent}from './component/register/register.component'
import{ForgotpasswordComponent}from './component/forgotpassword/forgotpassword.component'
import{SetPasswordComponent} from './component/set-password/set-password.component'
import { from } from 'rxjs';

const routes: Routes = [
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

