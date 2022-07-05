import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconversion'
})
export class CurrencyconversionPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    const [rate] = args;
    return value*rate;
  }

}
