import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Noteservice } from 'src/app/service/noteservice';
import { DataService } from 'src/app/service/data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pincomp',
  templateUrl: './pincomp.component.html',
  styleUrls: ['./pincomp.component.scss']
})
export class PincompComponent implements OnInit {

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
          console.log(this.notes,"=====>inpin")
        }
        
        
      )
    }
}
