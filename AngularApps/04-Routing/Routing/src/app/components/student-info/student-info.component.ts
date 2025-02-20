import {Component, OnInit} from '@angular/core';
import {Student} from '../../classes/student';
import {ActivatedRoute} from '@angular/router';
import {StudentDataService} from '../../services/student-data.service';

@Component({
  selector: 'student-info',
  imports: [],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.css'
})
export class StudentInfoComponent implements OnInit {
   student: Student | undefined = undefined;


  constructor(private route: ActivatedRoute,
              private dataService: StudentDataService) {
    const id = parseInt(this.route.snapshot.params['id']);
    this.student = this.dataService.students.find(student => student.id === id);
    console.log(this.student);
  }

  ngOnInit(): void {
  }

}
