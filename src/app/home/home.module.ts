import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ArticleService } from './services/article.service';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { SharedModule } from '../shared/shared.module';
import { ArticlesResolver } from './resolvers/articles.resolver';
import { FavoriteAccountListComponent } from './components/favorite-account-list/favorite-account-list.component';


@NgModule({
  declarations: [
    HomepageComponent,
    ArticleListComponent,
    FavoriteAccountListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [
    ArticleService,
    ArticlesResolver
  ]
})
export class HomeModule { }
