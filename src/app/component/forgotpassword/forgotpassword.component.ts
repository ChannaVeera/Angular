import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { ForgotPassword } from 'src/app/models/forgot-password'
import { MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/service/http-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgot: ForgotPassword = new ForgotPassword();

  email = new FormControl(this.forgot.emailId, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]);

  constructor(private snackBar: MatSnackBar, private httpservice: HttpService,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  emailValidation() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  onforgot() {
    console.log(this.forgot);
    this.httpservice.putRequestForget("forgetPassword?emailId=" + this.forgot.emailId, this.forgot).subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          console.log(response);
          this.snackBar.open(
            "Link sent", "undo",
            { duration: 2500 }
          )
        } else {
          console.log(response);
          this.snackBar.open(
            "Failed",
            "undo",
            { duration: 2500 }
          )
        }
      }
    )
  }

}

