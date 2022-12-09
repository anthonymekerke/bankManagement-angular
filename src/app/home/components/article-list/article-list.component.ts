import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input()
  articles$!: Observable<Article[]>;

  constructor() {}

  ngOnInit(): void {}

}
