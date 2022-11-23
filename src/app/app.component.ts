import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  constructor() {}

  ngOnInit(): void{

  }
  in:string ="";
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
