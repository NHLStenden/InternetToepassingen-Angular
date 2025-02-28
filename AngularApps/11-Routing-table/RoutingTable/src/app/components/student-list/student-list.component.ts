import { Component } from '@angular/core';
import {StudentDataService} from '../../services/student-data.service';
import {RouterLink} from '@angular/router';
import {StudentTableRowComponent} from '../student-table-row/student-table-row.component';

@Component({
  selector: 'student-list',
  imports: [
    StudentTableRowComponent
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  constructor(public dataService: StudentDataService) {

  }
}
