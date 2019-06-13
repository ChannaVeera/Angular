import { Component, OnInit } from '@angular/core';
import {Note} from 'src/app/models/note';
import { FormControl, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import {Noteservice} from "src/app/service/noteservice";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
open:boolean;
note:Note =new Note();
notes:any[];

title=new FormControl(this.note.title);
 description=new FormControl(this.note.description)

 constructor(private snackbar:MatSnackBar,private noteService: Noteservice,
  private route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {

      

  }
  
  onOpen(){
    this.open=true;
    
  }
  onClose(){
      console.log(this.note);
    this.noteService.postRequest("create",this.note).subscribe(
      

      (Response:any)=>{
        
        if(Response.statusCode===200){
          console.log(Response);
          this.snackbar.open(
            "Note Creation Successfull","undo",
            {duration:2500}
          )
        }

        else{
          console.log(Response);
          this.snackbar.open(
            "note Creation unSuccessfull","undo",
            {duration:2500}
          )
        }
      }
    )
  }
 
}
