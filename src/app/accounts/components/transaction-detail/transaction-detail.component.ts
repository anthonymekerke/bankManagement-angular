import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/core/services/transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  transaction$!: Observable<Transaction>;

  constructor(private route: ActivatedRoute,
    private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.initObservables();
  }

  private initObservables(): void{
    const accountId = +this.route.snapshot.params['account_id'];
    const transactionId = +this.route.snapshot.params['transaction_id'];
    this.transaction$ = this.transactionService.getTransactionById(accountId, transactionId);
  }

}
