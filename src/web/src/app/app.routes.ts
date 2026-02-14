import { Routes } from '@angular/router';
import { LayoutBaseComponent } from './shared/layout-base/layout-base.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CourtBookingComponent } from './pages/court-booking/court-booking.component';
import { OpenMatchesComponent } from './pages/open-matches/open-matches.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutBaseComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'court-booking', component: CourtBookingComponent },
      { path: 'open-matches', component: OpenMatchesComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'tournaments', component: TournamentsComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];
