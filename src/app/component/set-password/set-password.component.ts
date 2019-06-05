import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import{Setpassword} from 'src/app/models/setpassword'
import { from } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/service/http-service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  setpassword:Setpassword = new Setpassword();
  password = new FormControl(this.setpassword.password, [Validators.required, Validators.minLength(8), Validators.maxLength(15)])
  cpassword= new  FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)])
  token: string;
  constructor(private snackBar:MatSnackBar,private httpservice:HttpService,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.token=this.route.snapshot.paramMap.get('token');
  }
  getErrorPassword(){
    return this.password.hasError('required') ? 'You must enter a value':
    this.password.hasError('password') ? 'Min 6 Elements':'';
  }
  getErrorcPassword(){
    return this.password.hasError('required') ? 'You must enter a value':
    this.password.hasError('password') ? 'Min 6 Elements':'';
  }


  onlogin(){
  if(this.cpassword.value===this.password.value){
    console.log("cpassword and pass same===============>");
    this.token=localStorage.getItem("token")
    this.httpservice.putRequest("restPassword",this.setpassword).subscribe(

      (response:any)=>{
        console.log("after responce")
        if(response.statusCode === 200)
        {
          console.log("in status code  200")
          console.log(response);
          localStorage.setItem("token",response.token);

          this.snackBar.open(
            "ResetPassword Successfull","undo",
            
             { duration: 2500 }
         )
           this.router.navigate(['/login'])
 
        }else {
         console.log(response);
         this.snackBar.open(
           "Reset Failed",
           "undo",
           { duration: 2500 }
         )
       }
      }
 
     )
 
    }
  
    
  
  else{
    console.log("cpassword and pass same45as6+43213===============>");
    
        this.snackBar.open(
          "Reset Failed password not matching",
          "undo",
          { duration: 2500 }

  }
  }

  

