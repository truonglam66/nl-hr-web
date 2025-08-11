import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager-component/manager-component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard-component/dashboard-component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'manager',
        loadComponent: () =>
          import('./manager-component/manager-component').then(
            (m) => m.ManagerComponent
          ),
      },
      {
        path: 'employee-attendance',
        loadComponent: () =>
          import('./employee-attendance/employee-attendance').then(
            (m) => m.EmployeeAttendance
          ),
      },
      {
        path: 'week-schedule',
        loadComponent: () =>
          import('./week-schedule/week-schedule').then((m) => m.WeekSchedule),
      },
      {
        path: 'nofifications',
        loadComponent: () =>
          import('./notify-component/notify-component').then(
            (m) => m.NotifyComponent
          ),
      },
      {
        path: 'survey',
        loadComponent: () =>
          import('./survey-component/survey-component').then(
            (m) => m.SurveyComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
