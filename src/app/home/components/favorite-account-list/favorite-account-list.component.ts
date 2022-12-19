import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/core/services/account.service';
import { Account } from 'src/app/shared/models/account.model';

@Component({
  selector: 'app-favorite-account-list',
  templateUrl: './favorite-account-list.component.html',
  styleUrls: ['./favorite-account-list.component.css']
})
export class FavoriteAccountListComponent implements OnInit {
 
  accounts$!: Observable<Account[]>;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.initObservables();
    this.accountService.loadAccounts();
  }

  private initObservables(): void {
    this.accounts$ = this.accountService.getFavoriteAccounts();
  }
}
