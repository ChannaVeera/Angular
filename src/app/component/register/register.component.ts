import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import{User} from 'src/app/models/user'
import { from } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/service/http-service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  name = new FormControl(this.user.name, [Validators.required, Validators.minLength(8)]);
  email=new FormControl(this.user.emailId, [Validators.required]);
  password=new FormControl(this.user.password, [Validators.required, Validators.minLength(6)]);
  mobile=new FormControl(this.user.phoneNumber,[Validators.required, Validators.minLength(10),Validators.maxLength(10)]);

  constructor(private snackBar: MatSnackBar,private httpservice:HttpService,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  
  phoneNumber() {
    return this.mobile.hasError('required') ? 'must required' :
      
      '';
  }
  emailValidation() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
     onRegister() {
       console.log("eeeeeeeeeeee",this.user
       );
       console.log("ok in console");
      this.httpservice.postRequest("register", this.user).subscribe(
        (response: any) => {
          if (response.statusCode === 200) {
            console.log(response);
            this.snackBar.open(
              "Registered Successfully",
              "undo",
              { duration: 2500 }
            )
            this.router.navigate(['/login'])
          } else {
            console.log(response); 
            this.snackBar.open(
              "Registration Failed",
              "undo",
              { duration: 2500 }
            )
          }
    
        }
      )
    }
    
}
