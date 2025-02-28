# HttpObservables

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8.

# Observables

Dit project laat zien hoe je asynchroon informatie kunt weergeven in je template. 

## Observable

Een `Observable` is een mechanisme dat uit de stal van RxJS komt. Het geeft je de mogelijkheid om informatie
te versturen die typisch asynchroon beschikbaar komt. Denk dus aan het ophalen van een verzoek aan je backend:
je stuurt een HTTP-request en enige tijd later komt er pas een antwoord. Terwijl je wacht op het antwoord
kan de code prima andere taken uitvoeren.

Een observable lijkt daarmee sterk op het mechanisme van de Javascript `Promise`.

## Subscribe

Als je informatie uit een Observable wilt ophalen, dan moet je de code abonneren op de uitvoer. Pas als er minimaal
1 (één) abonnee is zal de Observable daadwerkelijk zijn werk gaan doen. Vergeet dus niet om een `subscribe()`
aanroep uit te voeren.

Een voorbeeld:

```typescript
import {Observable, Observer} from "rxjs";

// definitie
let observable: Observable<string>;

// aanmaken nieuwe Observable; parameter is een functie!
// we gebruiken een randomizer om de ene keer de error functie aan te roepen
// en de andere keer de .next() die data zal versturen. 
observable = new Observable<string>((observer: Observer<string>) => {

  if (Math.random() < 0.5) {
    observer.next("Martin Molema");
    observer.complete(); // sluit de verbinding af
  } else {
    observer.error("Er is een fout opgetreden!");
  }
});

// gebruik de observable. we geven bij subscribe() een object mee
// dit object heeft eigenschappen als 'next' en 'error'.
observable.subscribe({
  next: (naam: string) => {
    console.log(`Naam: ${naam}`);
  },
  error: (err: string) => {
    console.error(`Fout: ${err}`);
  }
});

```


# Referenties

* [RxJS](https://rxjs.dev/)
* [Javascript Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
