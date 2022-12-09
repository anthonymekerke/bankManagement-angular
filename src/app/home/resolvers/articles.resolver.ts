import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';
import { Observable } from 'rxjs';

/*
 * A resolver is a data provider used with the router.
 * During navigation, to avoid the call on a page with 
 * datas not loaded yet. the router delegate the loading
 * of the datas to a resolver. Once it is done, the resolver
 * navigate to the right page and inject the loaded datas.
*/

@Injectable()
export class ArticlesResolver implements Resolve<Article[]> {
  constructor(private articleService: ArticleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article[]> {
    return this.articleService.getArticles();
  }
}