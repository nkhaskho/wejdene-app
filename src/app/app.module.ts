import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UsersComponent } from './components/user/users/users.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { EditTicketComponent } from './components/tickets/edit-ticket/edit-ticket.component';
import { TicketDetailsComponent } from './components/tickets/ticket-details/ticket-details.component';
import { TicketsComponent } from './components/tickets/tickets/tickets.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories/sub-categories.component';
import { StocksComponent } from './components/stocks/stocks/stocks.component';
import { EditStockComponent } from './components/stocks/edit-stock/edit-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EditUserComponent,
    UsersComponent,
    UserDetailsComponent,
    EditTicketComponent,
    TicketDetailsComponent,
    TicketsComponent,
    CategoriesComponent,
    SubCategoriesComponent,
    StocksComponent,
    EditStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
