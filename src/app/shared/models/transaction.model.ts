import { Account } from "./account.model";

export class Transaction{
    id!: number;
    executionDate!: string;
    valueDate!: string;
    withdraw!: number | null;
    payment!: number | null;
    wording!: string;
    balance!: number;

    account?: Account;
}