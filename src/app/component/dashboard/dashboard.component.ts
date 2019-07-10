import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Noteservice } from 'src/app/service/noteservice';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { NoteupdateComponent } from '../noteupdate/noteupdate.component';
import { EditlableComponent } from '../editlable/editlable.component';
import { Labelservice } from 'src/app/service/labelservice';
import { DataService } from 'src/app/service/data.service';
import { BehaviorSubject } from 'rxjs';
import { ViewService } from 'src/app/service/view-service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  list: boolean = true;
  grid: boolean = false;
  private obtainNotes = new BehaviorSubject([]);
  currentMessage = this.obtainNotes.asObservable();
  constructor(private snackbar: MatSnackBar, private labelService: Labelservice, private noteservice: Noteservice,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder,
    public dialog: MatDialog, private dataservice: DataService, private viewservice: ViewService) { }
  appName: string;
  open: boolean;

  search = new FormControl();
  message: string;

  ngOnInit() {
    this.appName = "FundooNote";
    this.dataservice.currentMessage.subscribe(
      message => {
        ; this.message = message, this.getallabels()
      }
    )
  }
  changeView() {
    if (this.list) {
      this.grid = true;
      this.list = false;
    }
    else {
      this.list = true;
      this.grid = false;
    }
    this.viewservice.getView();
  }
  onNotes() {
    this.appName = "Note";
    this.router.navigate(['dashboard'])
  }
  openDialogLabel(notes: any) {

    const dialogRef = this.dialog.open(EditlableComponent, {

      height: '650px',
      width: '450px',

    });
  }
  account() {
    this.open = true;
  }
  onArchive() {
    this.appName = "Archive"
    this.router.navigate(['dashboard/archive'])

  }
  onTrash() {
    this.appName = "Trash"
    this.router.navigate(['dashboard/trash'])
  }
  data: []
  // onsearch(message: any) {
  //   console.log("on search")
  //   this.noteservice.getRequest("serach?findString=" + message).subscribe(
  //     (Response: any) => {
  //       this.data = Response;
  //       console.log(Response + "========>")
  //       console.log(this.data)


  //     }
  //   )
  // }
  onnote() {
    this.appName = "note"
  }

  labelsDisplay = [];
  getallabels() {
    this.labelService.getRequest("getAll").subscribe(
      (Response: any) => {
        this.labelsDisplay = Response;
        console.log('labelsDisplay dashboard ===================>', this.labelsDisplay)
      }

    )
  }

  onsearch(){
    console.log("search")
    this.noteservice.getRequest("search?findString="+this.search.value).subscribe(
      (response:any)=>{this.obtainNotes.next(response)
      this.router.navigate(['dashboard/search'])
    }
    )
  }

}


