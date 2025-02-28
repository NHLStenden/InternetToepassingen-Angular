import { Routes } from '@angular/router';
import {StallingListComponent} from './components/stalling-list/stalling-list.component';
import {StallingInfoComponent} from './components/stalling-info/stalling-info.component';

export const routes: Routes = [
  { path: '', component: StallingListComponent },
  { path: 'stalling/:id', component: StallingInfoComponent },
];
