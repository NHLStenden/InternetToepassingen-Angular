import { Component } from '@angular/core';
import {StudentInfoComponent} from './components/student-info/student-info.component';
import {Student} from './classes/student';

@Component({
  selector: 'app-root',
  imports: [StudentInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataDrivenComponent';
  student: Student;

  constructor() {
    this.student= new Student('Martin', 'Molema', '06-12345678', 'martin.molema@nhlstenden.com')
  }
}
