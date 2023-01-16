import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { greaterThanCurrentDateValidator } from '../validators/date.validator';

@Injectable()
export class TransactionFormService {

    constructor(private formBuilder: FormBuilder){}

    transactionForm(){
        return this.formBuilder.group({
            amount: ['', [Validators.compose([Validators.required, Validators.min(0.1)])]],
            account: [null, Validators.required],
            valueDate: [new Date(), [Validators.compose([Validators.required, greaterThanCurrentDateValidator()])]],

            recipientIban: ['', Validators.compose([Validators.required, Validators.minLength(27), Validators.maxLength(27)])],

            recipientReason: [''],
            recipientWording: [''],
            recipientReference: ['']
        })
    }
}