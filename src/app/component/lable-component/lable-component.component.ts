import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Noteservice } from 'src/app/service/noteservice';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Labelservice } from 'src/app/service/labelservice';

@Component({
  selector: 'app-lable-component',
  templateUrl: './lable-component.component.html',
  styleUrls: ['./lable-component.component.scss']
})
export class LableComponentComponent implements OnInit {
  label = [];
  constructor(private snackbar: MatSnackBar, private labelservice: Labelservice, private route: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder, private dataservice: DataService) { }
  message: string;




  ngOnInit() {
    // this.dataservice.currentMessage.subscribe(
    //   message => {this.message = message,this.getalllabels()})
    this.getalllabels();

  }
  getalllabels() {
    this.labelservice.getRequest("getAll").subscribe(
      (Response: any) => {

        this.label = Response;
        console.log(this.label)
      }

    )
  }

}
