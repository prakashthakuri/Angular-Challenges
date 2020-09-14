import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditcardinput',
  templateUrl: './creditcardinput.component.html',
  styleUrls: ['./creditcardinput.component.scss']
})
export class CreditcardinputComponent  {

  @Input() public creditCardNumber = '';
  private readOnly = false;

  public get isReadOnly() {
    return this.readOnly;

  }
  @Input() public set isReadOnly(value: boolean) {

    this.creditCardNumber = value ? this.formatReadOnlyCCNum(this.creditCardNumber) : this.creditCardNumber;

    this.readOnly = value;


  }
  private formatReadOnlyCCNum(ccNum: string): string {
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    const onlyLast4Shown = parts.map((part, index) => {
      if(index === parts.length -1 ){
        return part;
      }
      return 'xxxx';
    });
    return onlyLast4Shown.join('-');

  }


  constructor() { }



}
