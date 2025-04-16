import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'employees', component: EmployeeListComponent },
      { path: 'employees/add', component: AddEmployeeComponent },
      { path: 'employees/:id', component: EmployeeDetailComponent },
    ],
  },
];
