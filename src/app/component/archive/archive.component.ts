import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Noteservice } from 'src/app/service/noteservice';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

 
  notes:[];
 
  constructor(private snackbar:MatSnackBar,private noteService: Noteservice,private dataservice: DataService,
    private route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder,
    public dialog: MatDialog) { }

    message:string;

  ngOnInit() {
    this.dataservice.currentMessage.subscribe(
      message=>{;this.message=message,this.   getallNotes()   
      }
    )
  }
  getallNotes(){
    this.noteService.getRequest("getNote").subscribe(
      (Response:any)=>{
        
        this.notes=Response;
        console.log("Archieve=========>",this.notes)
      }
    )
  }
}
