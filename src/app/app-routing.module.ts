import { EditStockComponent } from './components/stocks/edit-stock/edit-stock.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StocksComponent } from './components/stocks/stocks/stocks.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories/sub-categories.component';
import { EditTicketComponent } from './components/tickets/edit-ticket/edit-ticket.component';
import { TicketDetailsComponent } from './components/tickets/ticket-details/ticket-details.component';
import { TicketsComponent } from './components/tickets/tickets/tickets.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UsersComponent } from './components/user/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/edit/:id',
    component: EditUserComponent
  },
  {
    path: 'tickets',
    component: TicketsComponent
  },
  {
    path: 'tickets/edit/:id',
    component: EditTicketComponent
  },
  {
    path: 'tickets/:id',
    component: TicketDetailsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'subcategories',
    component: SubCategoriesComponent
  },
  {
   path: 'stocks',
    component: StocksComponent
  },
  {
    path: 'stocks/edit/:id',
    component: EditStockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
