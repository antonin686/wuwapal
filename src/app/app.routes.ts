import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';
import { HomeComponent } from '@features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'convene', component: HomeComponent },
      { path: 'global-stats', component: HomeComponent },
      { path: 'collectors-hub', component: HomeComponent },
      { path: 'timeline', component: HomeComponent },
      { path: 'settings', component: HomeComponent },
    ],
  },
];
