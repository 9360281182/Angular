import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  Username:any;
  Password:string="";

  constructor() { }

  ngOnInit(): void {
  }
  LoginUser()
  {
    if(this.Username=="abcd" && this.Password=="abcd")
    {
      console.log("Welcome");
    }
  }

}
