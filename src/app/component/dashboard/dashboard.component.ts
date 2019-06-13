import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Noteservice } from 'src/app/service/noteservice';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NoteupdateComponent } from '../noteupdate/noteupdate.component';
import { EditlableComponent } from '../editlable/editlable.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  constructor(private snackbar:MatSnackBar,private noteService: Noteservice,
    private route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder,
    public dialog: MatDialog) { }
lable:[]
  ngOnInit() {
  }
  openDialogLabel(notes:any){
    console.log("yesz")
    console.log("note",this.lable);
    console.log(this.lable)
      const dialogRef = this.dialog.open(EditlableComponent, {
        
     height:'300px',
     width:'300px',
       
      });
    }
  }
  // showFiller = false;

