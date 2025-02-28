import {Injectable} from '@angular/core';
import {Student} from '../classes/student';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  public students: Student[] = [];

  constructor() {
    window.setTimeout(() => {
      this.students = [
        new Student('Mohammed', 'mohammed.ali@example.com', '0612345678', 'Ali', 10000),
        new Student('Sophie', 'sophie.dejong@example.com', '0623456789', 'de Jong', 10001),
        new Student('Mehmet', 'mehmet.kaya@example.com', '0634567890', 'Kaya', 10002),
        new Student('Fatima', 'fatima.elhassan@example.com', '0645678901', 'El Hassan', 10003),
        new Student('Liam', 'liam.vandenberg@example.com', '0656789012', 'van den Berg', 10004),
        new Student('Aisha', 'aisha.nguyen@example.com', '0667890123', 'Nguyen', 10005),
        new Student('Daan', 'daan.jansen@example.com', '0678901234', 'Jansen', 10006),
        new Student('Zara', 'zara.patel@example.com', '0689012345', 'Patel', 10007),
        new Student('Youssef', 'youssef.benali@example.com', '0690123456', 'Benali', 10008),
        new Student('Hanna', 'hanna.kowalski@example.com', '0611122233', 'Kowalski', 10009),
        new Student('Julian', 'julian.smit@example.com', '0622233344', 'Smit', 10010),
        new Student('Sara', 'sara.fernandez@example.com', '0633344455', 'Fernandez', 10011),
        new Student('Arjun', 'arjun.sharma@example.com', '0644455566', 'Sharma', 10012),
        new Student('Elena', 'elena.popescu@example.com', '0655566677', 'Popescu', 10013),
        new Student('Noah', 'noah.verhoeven@example.com', '0666677788', 'Verhoeven', 10014),
        new Student('Leila', 'leila.hassan@example.com', '0677788899', 'Hassan', 10015),
        new Student('Milan', 'milan.rossi@example.com', '0688899900', 'Rossi', 10016),
        new Student('Anika', 'anika.bakker@example.com', '0699900011', 'Bakker', 10017),
        new Student('Ravi', 'ravi.ahmed@example.com', '0610011223', 'Ahmed', 10018),
        new Student('Esmee', 'esmee.dubois@example.com', '0621122334', 'Dubois', 10019),
      ];
    }, 5000);
  }

}
