import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Noteservice } from 'src/app/service/noteservice';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { NoteupdateComponent } from '../noteupdate/noteupdate.component';

@Component({
  selector: 'app-note-com',
  templateUrl: './note-com.component.html',
  styleUrls: ['./note-com.component.scss']
})
export class NoteComComponent implements OnInit {

  notes:any[];
 
  constructor(private snackbar:MatSnackBar,private noteService: Noteservice,
    private route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder,
    public dialog: MatDialog) { }

    
 
    ngOnInit() {
      this.noteService.getRequest("getNote").subscribe(
        (Response:any)=>{
          
          this.notes=Response;
          console.log(this.notes)
        }
        
        
      )
    }
    onUpdate(notes:any): void {
      console.log("note",notes);
      console.log(notes)
        const dialogRef = this.dialog.open(NoteupdateComponent, {
          
       height:'300px',
       width:'300px',
          data: { 
                 'title': notes.title,
                  'description':notes.description,
                  'noteId':notes.noteId
                }
          
        });
      }
}
