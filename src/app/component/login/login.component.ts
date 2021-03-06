import { Component, OnInit, NgModule } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import{Login} from 'src/app/models/login'
import { Userservice } from 'src/app/service/userservice';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
 
  login: Login = new Login();
  
  email=new FormControl(this.login.emailId,[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]);
  password=new FormControl(this.login.password,[Validators.required,Validators.minLength(8)])
  token: string;
  constructor(private snackBar:MatSnackBar,private httpservice:Userservice ,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.token=this.route.snapshot.paramMap.get('token');
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorPassword(){
    return this.password.hasError('required') ? 'You must enter a value':
    this.password.hasError('password') ? 'Min 6 Elements':'';
  }
  onlogin(){
    console.log("Login:"+this.login.emailId);

    this.token=localStorage.getItem("token")
    this.httpservice.postRequest("login",this.login).subscribe(

     (response:any)=>{
       if(response.statusCode === 200)
       {
         console.log(response);
         localStorage.setItem("token",response.token);
         localStorage.setItem("email",response.emailId);
         this.snackBar.open(
           "Login Successfull","undo",
           
            { duration: 2500 }
        )
           this.router.navigate(['/dashboard'])

       }else {
        console.log(response);
        console.log("Login:"+this.login.emailId);
        this.snackBar.open(
          "Login Failed",
          "undo",
          { duration: 2500 }
        )
      }
     }

    )

  }
}
