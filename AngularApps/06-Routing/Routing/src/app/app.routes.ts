import { Routes } from '@angular/router';
import {StudentListComponent} from './components/student-list/student-list.component';
import {StudentInfoComponent} from './components/student-info/student-info.component';

export const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'student/:id', component: StudentInfoComponent },
];
