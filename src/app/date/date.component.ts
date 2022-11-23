import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
first:any;
  constructor() {

   }

  ngOnInit(): void {
    this.get();
  }
  out = new Date();
  in:string="";

  get()
  {
    setInterval(()=> {this.first=new Date();},1000);
  }

  



}
