import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guards';

const routes: Routes = [
  { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule), canActivate: [AuthGuard] },
  { path: 'transfer', loadChildren: () => import('./transfer/transfer.module').then(m => m.TransferModule), canActivate: [AuthGuard] },
  { path: 'budget', loadChildren: () => import('./budget/budget.module').then(m => m.BudgetModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: ''} //wildcard route that activates when no other define routes is found
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }