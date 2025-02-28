import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Student} from '../../classes/student';

@Component({
  selector: 'student-info',
  imports: [],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.css'
})
export class StudentInfoComponent {
  @Input() student: Student | undefined = undefined;
  @Output() clickedOnStudentName: EventEmitter<number> = new EventEmitter();

  handleStudentNameClicked(event: MouseEvent) {
    this.clickedOnStudentName.emit(this.student?.studentNr)
  }
}
