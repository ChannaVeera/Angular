import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Labelservice } from 'src/app/service/labelservice';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-get-labelcomponent',
  templateUrl: './get-labelcomponent.component.html',
  styleUrls: ['./get-labelcomponent.component.scss']
})
export class GetLabelcomponentComponent implements OnInit {
  label=[];
  constructor( private snackbar:MatSnackBar,private labelservice:Labelservice,private route:ActivatedRoute,private router:Router,
    private formBuilder:FormBuilder, private dataservice:DataService ) { }
  message:string;

 

 
  ngOnInit() {

    this.getalllabels();
   
  }
  getalllabels(){
    this.labelservice.getRequest("getAll").subscribe(
          (Response:any)=>{
            
            this.label=Response;
            console.log(this.label)
          }

    )
  }
  update(label:any){
    console.log("update")
    console.log(label)
    this.labelservice.putRequest("update?noteId="+label.labelId,label).subscribe(
      (Response:any)=>{
        if(Response.statusCode===200){
          this.dataservice.changeMessage("Update labels")
          console.log(Response)

          this.snackbar.open(
            "Label Update","",
            {duration:2500}
          )
        }
        else{
          this.snackbar.open(
            "Label Update UnSuccessfull","",
            {duration:2500}
          )
        }
      }
      
    )

  }
  
}
