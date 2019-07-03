import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent}from './component/login/login.component'
import{RegisterComponent}from './component/register/register.component'
import{ForgotpasswordComponent}from './component/forgotpassword/forgotpassword.component'
import{SetPasswordComponent} from './component/set-password/set-password.component'
import{DashboardComponent } from './component/dashboard/dashboard.component'
import {LableComponentComponent  } from './component/lable-component/lable-component.component';
import { ArchiveComponent } from  './component/archive/archive.component';
import { TrachComponent } from './component/trach/trach.component';
import { from } from 'rxjs';
import { NoteComponent } from './component/note/note.component';
import { PinComponent } from './component/pin/pin.component';
import { PincompComponent } from './component/pincomp/pincomp.component';

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
    component:DashboardComponent,children:[
      {
        path:'',
        component:NoteComponent
      },
      {
        path:"trash",
        component:TrachComponent
      },
      {
        path:"archive",
        component:ArchiveComponent
      },
    ]
  },
  {
    path:"allLabels",
    component:LableComponentComponent
  },
  {
    path:"pin",
    component:  PincompComponent
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

