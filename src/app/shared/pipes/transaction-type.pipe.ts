import { Pipe, PipeTransform } from '@angular/core';
import { TransactionType } from '../enums/transaction-type.enum';

@Pipe({
  name: 'transactionType'
})
export class TransactionTypePipe implements PipeTransform {
  transform(wording: string | null): string {

    let value = wording?.split(' ')[0];

    switch(value){
        case TransactionType.CREDIT:
            return "Virement perçu";
        case TransactionType.DEPOSIT_MONEY:
            return "Dépôt d'espèce";
        case TransactionType.BANK_CHARGES:
            return "Frais bancaires";
        case TransactionType.UNPAID:
            return "Retour d'impayé";
        default:
            value = `${wording?.split(' ')[0]} ${wording?.split(' ')[1]}`;
    }

    switch(value){
        case TransactionType.CREDIT_SEPA:
            return "Virement effectué depuis l'application";
        case TransactionType.DEBIT_SEPA:
            return "Mandat de prélevement";
        case TransactionType.PAYMENT_CARD:
            return "Paiement carte bancaire";
        case TransactionType.PAYMENT_CONTACTLESS:
            return "Paiement sans contact";
        case TransactionType.WITHDRAW_MONEY:
            return "Retrait d'espèce";
        case TransactionType.REFUND_BANK_CHARGES:
            return "Remboursement de Frais bancaire";
        default:
            return "Indisponible";
    }
  }
}