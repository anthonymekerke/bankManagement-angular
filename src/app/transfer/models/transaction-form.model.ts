import { Account } from "src/app/shared/models/account.model";

export class TransactionForm {
    amount!: number;
    account!: Account;
    valueDate!: Date;

    recipientIban!: string;
    
    recipientReason?: string;
    recipientWording?: string;
    recipientReference?: string;
}