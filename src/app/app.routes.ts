import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';


export const routes: Routes = [
  { path: '', component: HomepageComponent}, // homepage route
  { path: '**', redirectTo: '' } // wildcard redirect (optional)
];
