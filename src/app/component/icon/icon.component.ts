import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/note';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Labelservice } from 'src/app/service/labelservice';
import { Noteservice } from 'src/app/service/noteservice';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  label = [];
  note: Note = new Note();
  toggle: boolean = true;
  message: string
  @Input() noteInfo: any;
  constructor(private snackbar: MatSnackBar, private noteService: Noteservice,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder,
    private labelservice: Labelservice, private dataService: DataService, private dialog: MatDialog) { }



  ngOnInit() {
    this.getalllabels();
  }
  colorlens() {
    console.log("Note Color")

  }
  arrayColor = [
    [
      {
        name: "white", hexcode: " #ffffff "
      }
      ,
      {
        name: "cyan", hexcode: " #00FFFF "
      },

      {
        name: "red", hexcode: "#ff0000"
      },

    ],
    [
      {
        name: "green", hexcode: " #008000 "
      },
      {
        name: "orange", hexcode: " #FFA500 "
      }
      ,
      {
        name: "yellow", hexcode: "#ffff00"
      }
    ],

  ]
  setColor(color: any) {

    console.log(color)
    console.log("----------------")
    this.noteService.putRequest("/color?noteId=" + this.noteInfo.noteId, color).subscribe(
      (Response: any) => {
        if (Response.statusCode === 200) {
          this.dataService.changeMessage('color')
          this.dataService.changeMessage("name")
          console.log(Response)
          this.snackbar.open(
            "Note Color", "",
            { duration: 2500 }
          )
        }
        else {
          console.log(Response)
          this.snackbar.open(
            "Note Color Unsuccessfull", "",
            { duration: 2500 }
          )
        }
      }
    )

  }

  archive() {
    this.noteService.deleteRequest("isArchive?noteId=" + this.noteInfo.noteId).subscribe(
      (Response: any) => {
        console.log(this.noteInfo.noteId)
        if (Response.statusCode === 200) {
          console.log(this.noteInfo)
          this.dataService.changeMessage('trash')
          console.log(Response);
          this.snackbar.open(
            " Note archive successfull ", "undo",
            { duration: 2500 }
          )
        }

        else {
          console.log(Response);
          this.snackbar.open(
            "Note Archive unSuccessfull", "undo",
            { duration: 2500 }
          )
        }
      }
    )
  }
  onDelete() {
    console.log(this.noteInfo.noteId);
    this.noteService.deleteRequest("isTrash?noteId=" + this.noteInfo.noteId).subscribe(
      (Response: any) => {

        if (Response.statusCode === 200) {
          this.dataService.changeMessage('trash')
          console.log(Response);
          this.snackbar.open(
            "Note Trash", "undo",
            { duration: 2500 }
          )
        }

        else {
          console.log(Response);
          this.snackbar.open(
            "note unSuccessfull", "undo",
            { duration: 2500 }
          )
        }
      }
    )
  } lables: []
  // private open: boolean
  // onLabel() {
  //   console.log('onLabel check');
  //   this.open = true
  // }

  getalllabels() {
    this.labelservice.getRequest("getAll").subscribe(
      (Response: any) => {
        this.label = Response;
        console.log(this.label);
      })
  }
  addlabel(labels: any) {
    console.log(labels)
    this.noteService.putRequest("AddLabelToNote?labelId="+labels.labelId+"&noteId="+this.noteInfo.noteId,this.noteInfo).subscribe(
      (Response: any) => {
        if (Response.statusCode === 200) {
          this.dataService.changeMessage('trash')
          console.log(Response);
          this.snackbar.open(
            "Note Added ", "undo",
            { duration: 2500 }
          )
        }

        else {
          console.log(Response);
          this.snackbar.open(
            "Note Not", "undo",
            { duration: 2500 }
          )
        }
      }
    )
  }

}
