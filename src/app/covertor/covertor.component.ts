import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covertor',
  templateUrl: './covertor.component.html',
  styleUrls: ['./covertor.component.css']
})
export class CovertorComponent implements OnInit {
  in1!:number;
  out!:number;
  inr:string="";
  usd:string="";
  constructor() { }

  ngOnInit(): void {
  }
  evaluate(){
    if(this.inr=="USD" && this.usd=="INR"){
      this.out=this.in1*72;
    }
    else{
      this.out=this.in1/72;
    }
  
  }
}
