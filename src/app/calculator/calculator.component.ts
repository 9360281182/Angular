import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }


  ngOnInit(): void{

  }
  in ="";
  out!: number|string;

  display(value:string)
  {
    this.in+=value;
  }

  evaluate()
  {
    this.out = eval(this.in);
  }

  delete()
  {
    this.in = this.in.substring(0,this.in.length-1);
  }

  clr()
  {
    this.in ="";
    this.out ="";
  }
}


