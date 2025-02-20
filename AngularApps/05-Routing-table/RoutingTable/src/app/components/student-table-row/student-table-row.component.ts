import {Component, Input} from '@angular/core';
import {Student} from '../../classes/student';
import {RouterLink} from '@angular/router';

@Component({
  selector: '[student-table-row]',
  imports: [
    RouterLink
  ],
  templateUrl: './student-table-row.component.html',
  styleUrl: './student-table-row.component.css'
})
export class StudentTableRowComponent {
  @Input() student: Student | undefined = undefined;
}
