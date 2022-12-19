import { AccountType } from "../enums/account-type.enum";

export class Account{
    id!: number;
    label!: string;
    creationDate!: string;
    accountType!: AccountType;
    balance!: number;
    iban!: string;
}