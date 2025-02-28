import {Component} from '@angular/core';
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
    students: Student[] = [];
    selectedStudent: Student | undefined = undefined;

    constructor() {
        this.students.push(new Student('Martin', 'Molema', '06-12345678', 'martin.molema@nhlstenden.com'));
        this.students.push(new Student('Jan', 'Jansen', '06-123123123', 'jan.jansen@nhlstenden.com'));
        this.students.push(new Student('Kees', 'de Vries', '06-12345678', 'kees.de.vries@nhlstenden.com'));
        this.students.push(new Student('Harry', 'Pieterson', '06-12345678', 'harry.pieterson@nhlstenden.com'));
        this.students.push(new Student('Albert', 'Kolhoorn', '06-12345678', 'albert.kolhoorn@nhlstenden.com'));
    }

    handleClickStudent(student: Student) {
        if (student.email === this.selectedStudent?.email) {
            this.selectedStudent = undefined;
        }
        else {
            this.selectedStudent = student;
        }
    }
}
