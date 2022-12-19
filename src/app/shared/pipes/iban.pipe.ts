import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iban'
})
export class IbanPipe implements PipeTransform {
  transform(value: string): string {
    return "**** **** " + value.slice(-4);
  }
}