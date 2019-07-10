import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
data:any;
  constructor(private route:ActivatedRoute,private router:Router,private dashboard:DashboardComponent) { }

  ngOnInit() {
    this.dashboard.currentMessage.subscribe(
      response=>{this.data=response,
      console.log(this.data);
      }
    )
  }

}
