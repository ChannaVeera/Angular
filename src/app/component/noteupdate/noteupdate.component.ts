import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Noteservice } from 'src/app/service/noteservice';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-noteupdate',
  templateUrl: './noteupdate.component.html',
  styleUrls: ['./noteupdate.component.scss']
})
export class NoteupdateComponent implements OnInit {
  note:[];

  title=new FormControl(this.data.title);
  noteId=this.data.noteId;
  description=new FormControl(this.data.description)
  message:string;
  constructor( private snackbar:MatSnackBar,private noteService:Noteservice,
    private route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder,private datas: DataService
    ,@Inject(MAT_DIALOG_DATA) public data: any) {
     this.note = data;
    }

  ngOnInit() {
    console.log(this.data.title)
    console.log(this.data.description)
    console.log(this.data.noteId)
  
  }
  onClose(){
    console.log(this.data);
    this.noteService.putRequest("update?noteId="+this.noteId,this.note).subscribe(
      

      (Response:any)=>{
        
        if(Response.statusCode===200){
          this.datas.changeMessage("notecom")
          console.log(Response);
          this.snackbar.open(
            "Note Updation Successfull","undo",
            {duration:2500}
          )
        }

        else{
          console.log(Response);
          this.snackbar.open(
            "note Updation unSuccessfull","undo",
            {duration:2500}
          )
        }
      }
    )
  }

}
