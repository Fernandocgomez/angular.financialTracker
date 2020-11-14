import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DadComponent } from './components/dad/dad.component';
import { SavingComponent } from './components/saving/saving.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { DebtComponent } from './components/debt/debt.component';
import { FunComponent } from './components/fun/fun.component';
import { KillDebtComponent } from './components/kill-debt/kill-debt.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DadComponent,
    SavingComponent,
    ExpensesComponent,
    DebtComponent,
    FunComponent,
    KillDebtComponent,
    ShoppingComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
