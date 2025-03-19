import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserListComponent} from './components/user-list/user-list.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user/details/:id', component: UserDetailsComponent},

];
