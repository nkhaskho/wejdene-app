import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories/sub-categories.component';
import { EditTicketComponent } from './components/tickets/edit-ticket/edit-ticket.component';
import { TicketDetailsComponent } from './components/tickets/ticket-details/ticket-details.component';
import { TicketsComponent } from './components/tickets/tickets/tickets.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
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
    path: 'users/:id',
    component: UserDetailsComponent
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
    path: 'categories/:id',
    component: CategoriesComponent
  },
  {
    path: 'subcategories',
    component: SubCategoriesComponent
  },
  {
    path: 'subcategories/:id',
    component: SubCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
