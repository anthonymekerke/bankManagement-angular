import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ArticlesResolver } from './resolvers/articles.resolver';

const routes: Routes = [
  { path: '', component: HomepageComponent, resolve: { articles: ArticlesResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
