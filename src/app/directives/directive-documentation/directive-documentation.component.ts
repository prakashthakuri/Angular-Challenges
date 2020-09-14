import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-documentation',
  templateUrl: './directive-documentation.component.html',
  styleUrls: ['./directive-documentation.component.scss']
})
export class DirectiveDocumentationComponent  {

  // tslint:disable-next-line: typedef
  public log(){
    console.log('Clicked');
  }


  constructor() { }



}
