import { Component } from '@angular/core';
import {StudentDataService} from '../../services/student-data.service';
import {RouterLink} from '@angular/router';
import {getRouteToStudentDetails} from '../../helpers/RouteSupport';

@Component({
  selector: 'student-list',
  imports: [
    RouterLink
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  constructor(public dataService: StudentDataService) {

  }

  protected readonly getRouteToStudentDetails = getRouteToStudentDetails;
}
