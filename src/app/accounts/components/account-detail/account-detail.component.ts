import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/core/services/account.service';
import { Account } from 'src/app/shared/models/account.model';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  account$!: Observable<Account>;

  constructor(private accountService: AccountService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const accountId = +this.route.snapshot.params['id'];
    this.account$ = this.accountService.getAccountTypedById(accountId);
  }

}
