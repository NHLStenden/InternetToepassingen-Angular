import { Component } from '@angular/core';
import {Student} from './classes/student';
import {StudentInfoComponent} from './components/student-info/student-info.component';

@Component({
  selector: 'app-root',
  imports: [StudentInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Component Events';
  student: Student;

  constructor() {
    this.student= new Student('Martin', 'Molema', '06-12345678', 'martin.molema@nhlstenden.com',53903)
  }

  clickedOnStudent(studentNr: number) {
    alert(studentNr);
  }
}
