import {Component, OnInit} from '@angular/core';
import {StudentInfoComponent} from './components/student-info/student-info.component';
import {Student} from './classes/student';

@Component({
  selector: 'app-root',
  imports: [StudentInfoComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'DataDrivenComponent';
  student: Student | undefined;

  constructor() {

  }

  ngOnInit(): void {
    window.setTimeout(()=>{
      this.student= new Student('Martin', 'Molema', '06-12345678', 'martin.molema@nhlstenden.com')
    },10000);


  }
}
