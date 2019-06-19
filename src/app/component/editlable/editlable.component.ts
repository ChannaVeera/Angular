import { Component, OnInit } from '@angular/core';
import { Labelservice } from 'src/app/service/labelservice';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { MatSnackBar } from '@angular/material';
import { Label } from 'src/app/models/label';

@Component({
  selector: 'app-editlable',
  templateUrl: './editlable.component.html',
  styleUrls: ['./editlable.component.scss']
})
export class EditlableComponent implements OnInit {
  label:Label = new Label();
  labels:any[];
  lableName =new FormControl(this.label.lableName);
  constructor( private snackbar:MatSnackBar,private labelservice:Labelservice,private route:ActivatedRoute,private router:Router,
    private formBuilder:FormBuilder, private dataservice:DataService ) { }

  ngOnInit() {
  }
  onClose(){
  console.log(this.label);
  console.log(this.label.lableName)
  if(this.label.lableName!=null){
    console.log(this.label.lableName)
    this.labelservice.postRequest("create",this.label).subscribe(
      

      (Response:any)=>{
        
        if(Response.statusCode===200){
          this.dataservice.changeMessage("lable")
          console.log(Response);
          this.snackbar.open(
            "Lable Creation Successfull","undo",
            {duration:2500}
          )
        }

        else{
          console.log(Response);
          console.log(this.label)
          this.snackbar.open(
            "label Creation unSuccessfull","undo",
            {duration:2500}
          )
        }
      }
    )
    }
  else{
    console.log(this.label)
    this.snackbar.open( "Lable should not be null","undo",
    {duration:2500})
  }

  }
}
