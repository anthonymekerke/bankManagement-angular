import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

import { Account } from 'src/app/shared/models/account.model';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  articles$!: Observable<Article[]>;
  accounts$!: Observable<Account[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initObservables();
  }

  private initObservables(): void{
    this.articles$ = this.route.data.pipe(
      map(data => data['articles']) // match the resolve attribute define in the routing module
    );

    this.accounts$ = this.route.data.pipe(
      map(data => data['accounts'])
    )
  }
}
