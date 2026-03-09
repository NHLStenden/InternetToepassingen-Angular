import { Routes } from '@angular/router';
import {StudentListComponent} from './components/student-list/student-list.component';
import {StudentInfoComponent} from './components/student-info/student-info.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id', component: StudentInfoComponent },
];
