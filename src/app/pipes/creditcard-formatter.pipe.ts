import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcardFormatter'
})
export class CreditcardFormatterPipe implements PipeTransform {

  public transform(cardNumber: string): string{
    if (!this.hasCorrectLength(cardNumber)){
      return 'Invalid Card Length';
    }

    if(!this.isAllNumbers(cardNumber)){
      return 'Invalid Characters';
    }

    return this.formatCardNumber(cardNumber);
  }


  private  isAllNumbers(cardNumber : string): boolean {
    const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const totalValidCharacters = cardNumber.split('').filter((char) => stringNumbers.includes(char)).length;

    return totalValidCharacters === cardNumber.length;

  }
  private hasCorrectLength(cardNumber: string): boolean{
    const cardNumberLength = cardNumber.length;
    const isMasterVisaDiscoverCardLength = 16;
    const isAmexCardLength = 15;

    if (cardNumberLength === isAmexCardLength || cardNumberLength === isMasterVisaDiscoverCardLength) {
      return true;
    }
    return false;


  }

  private  formatCardNumber(cardNumber: string): string{
    const parts = cardNumber.match(/[\s\S]{1,4}/g);

    return parts.join('-');

  }


}
