import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Noteservice } from 'src/app/service/noteservice';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { NoteupdateComponent } from '../noteupdate/noteupdate.component';
import { EditlableComponent } from '../editlable/editlable.component';
import { Labelservice } from 'src/app/service/labelservice';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  constructor(private snackbar: MatSnackBar, private labelService: Labelservice,private noteservice:Noteservice,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder,
    public dialog: MatDialog, private dataservice:DataService) { }
  appName: string;
  open:boolean;
  lables: []
  search=new FormControl();
  message:string;
  
  ngOnInit() {
    this.appName = "FundooNote";
    this.dataservice.currentMessage.subscribe(
      message=>{;this.message=message,this. getallabels()   
      }
    )
  }
  
  onNotes()
  {
    this.appName="Note";
    this.router.navigate(['dashboard'])
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
  account(){
    this.open=true;
  }
  onArchive(){
    this.appName="Archive"
    this.router.navigate(['dashboard/archive'])

  }
  onTrash(){
    this.appName="Trash"
    this.router.navigate(['dashboard/trash'])
  }
 data:[]
  onsearch(){
    console.log("on search")
    this.noteservice.getRequest("searchTitle?title="+this.search.value).subscribe(
    (Response:any)=>{
    this.data=Response;
    console.log(Response+"========>")
    console.log(this.data)


    }
    )
  }
  onnote() {
    this.appName = "note"
  }

  labelsDisplay = [];
  getallabels() {
    this.labelService.getRequest("getAll").subscribe(
      (Response: any) => {
        this.labelsDisplay = Response;
        console.log('labelsDisplay dashboard ===================>',this.labelsDisplay)
      }

    )
  }

}
 

