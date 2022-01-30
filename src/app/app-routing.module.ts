import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProfileDetailsComponent } from './views/profile-details/profile-details.component';
import { ProgressComponent } from './views/progress/progress.component';
import { StatsComponent } from './views/stats/stats.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'stats',
    component: StatsComponent,
  },
  {
    path: 'progress',
    component: ProgressComponent,
  },
  {
    path: 'profile-details',
    component: ProfileDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
