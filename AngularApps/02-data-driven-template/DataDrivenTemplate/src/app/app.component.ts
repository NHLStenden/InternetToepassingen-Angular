import {Component} from '@angular/core';
import {DatePipe, DecimalPipe} from '@angular/common';
import {AgePipe} from './pipes/age.pipe';

@Component({
  selector: 'app-root',
  imports: [
    DatePipe,
    DecimalPipe,
    AgePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataDrivenTemplate';

  protected studentNaam: string;
  protected studentAchternaam: string;
  protected studentEmail: string;
  protected geboorteDatum: Date;
  protected leeftijd: number;

  constructor() {
    this.studentNaam = 'Martin';
    this.studentAchternaam = 'Molema';
    this.studentEmail = 'martin.molema@nhlstenden.com';
    this.geboorteDatum = new Date();
    this.geboorteDatum.setFullYear(1969, 7, 21);

    const now = new Date();
    /**
     * Haal de tijd op in milliseconden en reken deze om naar jaren (grofweg)
     */
    this.leeftijd = (now.getTime() - this.geboorteDatum.getTime()) / 1000 / 60 / 60 / 24 / 365;

  }
}
