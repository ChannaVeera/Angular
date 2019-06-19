import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Noteservice } from 'src/app/service/noteservice';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { NoteupdateComponent } from '../noteupdate/noteupdate.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-note-com',
  templateUrl: './note-com.component.html',
  styleUrls: ['./note-com.component.scss']
})
export class NoteComComponent implements OnInit {
  notes:[];
 
  constructor(private snackbar:MatSnackBar,private noteService: Noteservice,private data: DataService,
    private route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder,
    public dialog: MatDialog) { }

    message:string;

 

 
    ngOnInit() {
      this.data.currentMessage.subscribe(
        message => {this.message = message,this.getallNotes()})

        
     
    }
    getallNotes(){
      this.noteService.getRequest("getNote").subscribe(
        (Response:any)=>{
          
          this.notes=Response;
          console.log(this.notes)
        }
        
        
      )
    }
    onUpdate(note:any): void {
      console.log("note",note);
      console.log(note)
        const dialogRef = this.dialog.open(NoteupdateComponent, {
          
       height:'300px',
       width:'300px',
          data: { 
                 'title': note.title,
                  'description':note.description,
                  'noteId':note.noteId
                }
          
        });
      }
}
