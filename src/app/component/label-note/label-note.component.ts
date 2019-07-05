import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Noteservice } from 'src/app/service/noteservice';
import { Labelservice } from 'src/app/service/labelservice';

@Component({
  selector: 'app-label-note',
  templateUrl: './label-note.component.html',
  styleUrls: ['./label-note.component.scss']
})
export class LabelNoteComponent implements OnInit {
  @Input() labelInfo: any;
  label = [];
  message: string
  constructor(private snackBar: MatSnackBar, private labelService: Labelservice,
    private noteService: Noteservice,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private noteservice: Noteservice,
    private dataService: DataService,
    private router: Router) { }



  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      message => {
        console.log(this.labelInfo); this.message = message, this.getAllLabels()
      }
    )

  }

  getAllLabels() {
    this.noteservice.getRequest('getlabel?noteId=' + this.labelInfo.noteId).subscribe(
      (Response: any) => {
        this.label = Response

      }
    )

  }

  onDelete(label1: any) {

    this.noteService.deleteRequest("RemoveLabelToNote?noteId=" + this.labelInfo.noteId + "&labelId=" + label1.labelId).subscribe(

      (Response: any) => {
        if (Response.statusCode === 200) {
          this.dataService.changeMessage("label Delete")
          console.log(Response);
          this.snackBar.open(
            "Label Removed", "",
            { duration: 2500 }
          )
        }

        else {
          console.log(Response);
          this.snackBar.open(
            "Label Removed unSuccessfull", "",
            { duration: 2500 }
          )
        }
      }

    )

  }

}
