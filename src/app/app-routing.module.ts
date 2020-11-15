// Anuglar Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { DadComponent } from './components/dad/dad.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DebtComponent } from './components/debt/debt.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { FunComponent } from './components/fun/fun.component';
import { KillDebtComponent } from './components/kill-debt/kill-debt.component';
import { LoginComponent } from './components/login/login.component';
import { SavingComponent } from './components/saving/saving.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { SignupComponent } from './components/signup/signup.component';
// Route Guard 
import { AuthGuard } from './route-guard/auth.guard';
// Route Resolvers

const routes: Routes = [
  { path: '', component: SignupComponent, data: { animation: 'isRight' } },
  { path: 'login', component: LoginComponent, data: { animation: 'isLeft' } },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dad', component: DadComponent, canActivate: [AuthGuard] },
  { path: 'saving', component: SavingComponent, canActivate: [AuthGuard] },
  { path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuard] },
  { path: 'debt', component: DebtComponent, canActivate: [AuthGuard] },
  { path: 'fun', component: FunComponent, canActivate: [AuthGuard] },
  { path: 'kill-debt', component: KillDebtComponent, canActivate: [AuthGuard] },
  { path: 'shopping', component: ShoppingComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
