// Anuglar modules
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

const routes: Routes = [
  {path: "", component: SignupComponent, data: { animation: "isRight" }},
  {path: "login", component: LoginComponent, data: { animation: "isLeft" }},
  {path: "dashboard", component: DashboardComponent},
  {path: "dad", component: DadComponent}, 
  {path: "saving", component: SavingComponent},
  {path: "expenses", component: ExpensesComponent},
  {path: "debt", component: DebtComponent}, 
  {path: "fun", component: FunComponent},
  {path: "kill-debt", component: KillDebtComponent},
  {path: "shopping", component: ShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
