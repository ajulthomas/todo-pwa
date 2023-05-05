import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material module imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { StatsComponent } from './views/stats/stats.component';
import { ProgressComponent } from './views/progress/progress.component';
import { ProfileDetailsComponent } from './views/profile-details/profile-details.component';
import { TaskFilterPipe } from './pipes/task-filter.pipe';
import { AddTaskDialogComponent } from './components/add-task-dialog/add-task-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavItemComponent,
    DashboardComponent,
    StatsComponent,
    ProgressComponent,
    ProfileDetailsComponent,
    TaskFilterPipe,
    AddTaskDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    // Angular material imports
    MatSidenavModule,
    MatIconModule,
    MatRippleModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,

    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
