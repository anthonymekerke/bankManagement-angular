import { Pipe, PipeTransform } from '@angular/core';
import { AccountType } from '../enums/account-type.enum';

@Pipe({
  name: 'accountType'
})
export class AccountTypePipe implements PipeTransform {
  transform(value: AccountType | null): string {
    switch(value){
        case AccountType.CURRENT_ACCOUNT:
            return "Compte Courant";
        case AccountType.SAVING_ACCOUNT:
            return "Compte Épargne";
        default:
            return 'Indisponible';
    }
  }
}