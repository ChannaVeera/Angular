import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/note';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Noteservice } from 'src/app/service/noteservice';

@Component({
  selector: 'app-trachicon',
  templateUrl: './trachicon.component.html',
  styleUrls: ['./trachicon.component.scss']
})
export class TrachiconComponent implements OnInit {
  open:boolean;
  @Input()noteInfo:any;
  note:Note=new Note();
  
  constructor(private snackbar:MatSnackBar,private noteService:Noteservice,
    private route:ActivatedRoute,private router:Router,
    private formBuilder:FormBuilder,private dataService:DataService) {}
  
    ngOnInit() {
      
    }
    morevert(){
      this.open=true;
    }
    onDelete(){
      console.log(this.noteInfo.noteId);
     this.noteService.deleteRequest("delete?noteId="+this.noteInfo.noteId).subscribe(
      (Response:any)=>{
        
        if(Response.statusCode===200){
          this.dataService.changeMessage('onDelete')
          console.log(Response);
          this.snackbar.open(
            "Note Deletion Successfull","Undo",
            {duration:2500}
          )
        }
  
        else{
          console.log(Response);
          this.snackbar.open(
            "note unSuccessfull","undo",
            {duration:2500}
          )
        }
      }
    )
    }
    onRestore(){
      console.log(this.noteInfo.noteId);
     this.noteService.deleteRequest("isTrash?noteId="+this.noteInfo.noteId).subscribe(
      (Response:any)=>{
        
        if(Response.statusCode===200){
          this.dataService.changeMessage('onRestore')
          console.log(Response);
          this.snackbar.open(
            "Note Trash","",
            {duration:2500}
          )
          }
        else{
          console.log(Response);
          this.snackbar.open(
            "note unSuccessfull","undo",
            {duration:2500}
          )
        }
      }
    )
  }
}
