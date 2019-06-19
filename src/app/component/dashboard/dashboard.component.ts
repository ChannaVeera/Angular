import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Noteservice } from 'src/app/service/noteservice';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NoteupdateComponent } from '../noteupdate/noteupdate.component';
import { EditlableComponent } from '../editlable/editlable.component';
import { Labelservice } from 'src/app/service/labelservice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  constructor(private snackbar: MatSnackBar, private labelService: Labelservice,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder,
    public dialog: MatDialog) { }
  appName: string;
  lables: []
  ngOnInit() {
    this.appName = "FundooNote";

    this.getalllabels() ;
  }

  openDialogLabel(notes: any) {
    console.log("yesz")
    console.log("note", this.lables);
    console.log(this.lables)
    const dialogRef = this.dialog.open(EditlableComponent, {

      height: '650px',
      width: '450px',

    });
  }
  // openDialogLabel(){
  //   this.labelService.getRequest("getAll").subscribe(
  //     (Response:any)=>{

  //       this.lables=Response;
  //       console.log(this.lables)
  //     }


  //   )
  // }
  onnote() {
    this.appName = "note"
  }

  labelsDisplay = [];
  getalllabels() {
    this.labelService.getRequest("getAll").subscribe(
      (Response: any) => {
        this.labelsDisplay = Response;
        console.log('labelsDisplay dashboard ===================>',this.labelsDisplay)
      }

    )
  }

}
  // showFiller = false;

