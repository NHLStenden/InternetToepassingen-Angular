import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {catchError, Observable, Observer, of} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HttpObservables';


// definitie
  naam$: Observable<string>;

  constructor() {
// aanmaken nieuwe Observable; parameter is een functie!
// we gebruiken een randomizer om de ene keer de error functie aan te roepen
// en de andere keer de .next() die data zal versturen.
    this.naam$ = new Observable<string>((observer: Observer<string>) => {

      if (Math.random() < 0.5) {
        observer.next("Martin Molema");
        observer.complete();
      } else {
        observer.error("Er is een fout opgetreden!");
      }
    }).pipe(catchError((error: string) => {return of(error)}));

// gebruik de observable. we geven bij subscribe() een object mee
// dit object heeft eigenschappen als 'next' en 'error'.
    this.naam$.subscribe({
      next: (naam: string) => {
        console.log(`Naam: ${naam}`);
      },
      error: (err: string) => {
        console.error(`Fout: ${err}`);
      }
    });
  }
}
