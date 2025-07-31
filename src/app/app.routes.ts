import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout-component/layout-component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login-component/login-component').then((m) => m.LoginComponent),
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
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
