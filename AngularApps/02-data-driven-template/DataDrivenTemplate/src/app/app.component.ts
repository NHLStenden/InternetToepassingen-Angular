import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataDrivenTemplate';

  studentNaam: string;
  studentAchternaam: string;
  studentEmail: string;

  constructor() {
    this.studentNaam = 'Martin';
    this.studentAchternaam = 'Molema';
    this.studentEmail = 'martin.molema@nhlstenden.com';

  }
}
