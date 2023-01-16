import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transaction'
})
export class TransactionPipe implements PipeTransform {
  transform(value: number | null, arg: 'payment' | 'withdraw'): string {
    if(value === null) {return ''}
    return arg === 'payment' ? `+${value}` : `-${value}`;
  }
}