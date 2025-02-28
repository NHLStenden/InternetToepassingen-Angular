import {Component, inject} from '@angular/core';
import {Student} from '../../classes/student';
import {ActivatedRoute} from '@angular/router';
import {StudentDataService} from '../../services/student-data.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'student-info',
  imports: [],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.css'
})
export class StudentInfoComponent {
  student: Student | undefined = undefined;


  /**
   * Constructor with 'old style' Dependency Injection
   * @param dataService
   */
  constructor(private dataService: StudentDataService) {

    /**
     * New style dependency injection; can only be done in de constructor of a component
     */
    const route = inject(ActivatedRoute);
    const title = inject(Title);


    const id = parseInt(route.snapshot.params['id']);
    this.student = this.dataService.students.find(student => student.id === id);

    title.setTitle(`Student Info voor student ${this.student?.firstName}`);

  }

}
