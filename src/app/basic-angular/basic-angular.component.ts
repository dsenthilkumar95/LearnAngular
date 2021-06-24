import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-angular',
  templateUrl: './basic-angular.component.html',
  styleUrls: ['./basic-angular.component.css']
})
export class BasicAngularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  textColor:boolean = true;
  textSize:boolean = true;
  textStyle:boolean = true;
  ngmodelSample:string = "";

  currentClasses: Record<string, boolean> = {
    textSize: this.textSize,
    textColor: this.textColor,
  };

  currentStyles: Record<string, string> = {
    'font-style':  this.textStyle ? 'italic' : 'normal'
  }
}
