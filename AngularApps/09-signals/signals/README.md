# Signals

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

In dit voorbeeld wordt gebruik gemaakt van Angular `signals`. Hiermee kunnen we beter controle krijgen over hoe
Angular moet reageren op veranderingen in de gegevens en de presentatie in de HTML.

Angular zegt hierover op de website:
> Angular Signals is a system that granularly tracks how and where your state is used throughout an
> application, allowing the framework to optimize rendering updates."

en

> Create and manage dynamic data.

Angular kent verschillende concepten:

* Signal
* Computed
* Effects

# Signals

Met een `signal` zeg je eigenlijk:

> hier is een variabele waar je op kunt letten. Als de situatie veranderd dan zal ik een signaal sturen. Als
> je wilt kun je jezelf registreren op deze signalen.

We noemen dit patroon ook wel het **Observable/Observer** of **Publisher/Subscriber** ("pub-sub") principe.

Dit werkt als volgt:

```typescript
  import {signal} from '@angular/core';

const voornaam = signal<string>('Martin');
```

De volgende dingen vallen op:

* je kunt een signal registreren met het keyword `const` als je niet van plan bent om verderop in de code een ander
  `signal` toe te wijzen. We kunnen de inhoud van het `signal` object gewoon wijzigen zonder een heel nieuwe `signal`
  object aan te hoeven maken (hierover later meer).
* Je geeft een type op met de <...> (generics).
* Je geeft een initiële waarde op, net als bij een constructor

De aanroep lijkt dus erg op het aanmaken van een nieuwe klasse instantie maar het sleutelwoord `new` wordt niet gebruikt
zoals in onderstaand voorbeeld.

```typescript
  const x = new Mijnklasse(10);
```

We hebben nu dus een variabele van het type `signal` en we kunnen dat dus gebruiken in de HTML om te tonen.

````html
  <p>Mijn naam is {{ naam() }}</p>
````

Wat opvalt is dat we dus niet de variabelenaam `voornaam` gebruiken, maar dat we een functie aanroepen met die naam.
De declaratie van de variabele `voornaam` levert dus niet een variabele op maar eigenlijk een aanroepbare functie!

Als je de waarde wilt op vragen van de `voornaam` dan roep je dus de functie `voornaam()` op. Dat geldt voor de
typescript code, maar ook voor in de HTML. In onderstaande voorbeeld wordt de waarde van het `signal` 'voornaam'
opgevraagd en opgeslagen in een nieuwe variabele `voornaamString` van het type `string`.

```typescript
  const voornaamString: string = this.voornaam();
```

# Reageren op veranderingen: computed

Het is mooi dat we dus nu een variabele hebben die bij verandering een signaal uitstuurt. Nu moeten we nog regelen
dat we er op kunnen reageren. Dat kan dus door een functie aan te roepen in de HTML. Via de angular *Change Detection*
zal het signaal opgevangen worden en de inhoud opgevraagd en getoond worden als er een signaal komt 'ik heb een nieuwe waarde'.

Het is echter ook mogelijk om je te abonneren op die veranderingen in de typescript code. Dat gaat met de functie
`computed`. Een voorbeeld:

```typescript
  const voornaamHoofdletters: Signal<string> = computed<string>(() => voornaam().toUpperCase());
```

Dit vereist enige uitleg. Ten eerste wordt er een nieuwe variabele van het type `Signal<string>` gedeclareerd.
De initialisatie gebeurd met de aanroep van de functie `computed()`. Deze maakt een nieuw `Signal` object aan
van het type `string` in dit geval.

Dan kijken we naar de aanroep van de functie `computed()`. Deze heeft 1 parameter en dat moet een functie zijn. Daarmee
zeggen we eigenlijk: als het nodig is dan moet je elke keer deze functie uitvoeren. Echter, de declaratie van deze
functie is mogelijk wat wonderlijk als je nog nooit een zogenaamde *lambda functie* (arrow functions, of fat-arrow
functions) hebt gezien.

## Lambda functions

We gebruiken hier een functie zonder parameters, daarom staat er eerst `()`. Dan volgt
de pijl ('fat arrow') `=>` wat eigenlijk betekent: hierna komt de code van deze functie. Deze wordt gevolgd
door een codeblock. Als er meer dan één *statement* nodig is zul je deze moeten omsluiten met `{...}`. In dit geval
is er maar één statement. We vragen de waarde op van de `voornaam` en veranderen deze naar hoofdletters. De functie
`toUpperCase()` zal een nieuwe string teruggeven en dat is meteen het resultaat van de functie.

Als we dit allemaal helemaal zouden uitschrijven dan hebben we onderstaande code nodig.

```typescript
  function naarHoofdletters(text: string): string {
  const hoofdletterText = text.toUpperCase();
  return hoofdletterText;
}

const voornaamHoofdletters: Signal<string> = computed<string>(() => {
  const voornaamHoofdlettersText = naarHoofdletters(voornaam());
  return voornaamHoofdlettersText;
});
```

Het kan al iets compacter door tijdelijke variabelen te elimineren:

```typescript
  function naarHoofdletters(text: string): string {
  return text.toUpperCase();
}

const voornaamHoofdletters: Signal<string> = computed<string>(() => {
  return naarHoofdletters(voornaam());
});
```

En nog een stap verder hier onder. We zien nu dat ook het codeblock `{...}` verdwenen is maar ook het `return` statement.
Lamba functie moeten namelijk bijna altijd iets teruggeven. Daarom mag je het `return` statement ook weglaten.

```typescript
  function naarHoofdletters(text: string): string {
  return text.toUpperCase();
}

const voornaamHoofdletters: Signal<string> = computed<string>(() => naarHoofdletters(voornaam()));
```
## computed() objecten in HTML

We hebben dus nu een nieuw `Signal`-object dat we weer kunnen gebruiken in HTML:

````html
  <p>Mijn naam is {{ naam() }}</p>
<p>Mijn naam in hoofdletters is {{ voornaamHoofdletters() }}</p>
````
## more on computed()

Nu kun je je afvragen hoe Angular weet dat het computed object moet reageren op wijzigingen in de `voornaam()` signal.
Bij het aanroepen van de functie `computed()` zal Angular kijken naar welke `Signal` objecten er in de functie
gebruikt worden en zorgen dat deze opgevangen worden. Daar zit dus enige 'magie'....

# Effects

Het kan handig zijn om te reageren op signals zonder dat je weer een nieuw signal wilt maken. Een aanroep
naar `computed()` maakt immers weer een nieuw `Signal`-object. 

Heb je dat nu niet nodig dan kun je de `effect()` functie gebruiken (let op: _enkelvoud_!). Dit werk verder hetzelfde
als de `computed()` functie, behalve dat er geen resultaat wordt teruggegeven. 

```typescript
  effect(() => {
    console.log(voornaam());
  });
```

We zien hier dus alleen een aanroep van een functie en geen return-value. De code staat in zo'n geval ook meestal
tussen `{...}` voor de duidelijkheid. De werking is verder hetzelfde: Angular kijkt weer welke `Signal` objecten
er gebruikt worden en zal zorgen dat de `effect()` functie aangeroepen wordt. 

# De waarde van een signal veranderen

Er zijn twee mogelijkheden om de waarde in een `Signal`-object te veranderen:
* update
* set

Met de set-functie stel je een nieuwe waarde in. Bijvoorbeeld 
```typescript
  const voornaam = signal<string>('Martin');
  voornaam.set('Karel');
```
Let op dat je dus niet schrijft `voornaam().set('Karel')`! 

De methode `update` stelt je in staat om de bestaande waarde op te vragen en deze aan te passen. We gebruiken
daarbij weer een _lambda_ functie.

```typescript
  const counter = signal<number>(10);
  counter.update(() => counter() + 1);
  console.log(counter()); // geeft het getal 11 in de console.
```

De _lambda_ functie wordt éénmalig aangeroepen (zonder parameters). In de expressie vragen we de huidige waarde op
van de variabele `counter` door `counter()` te schrijven. We tellen er het getal 1 bij op en dat is het resultaat
van de expressie. Het `return` statement ontbreekt weer, maar is dus impliciet.

# Belangrijk! 

Het is alleen mogelijk om de functies `computed()` en `effect()` te gebruiken binnen een `injection` context. Het
betekent vaak concreet dat je deze alleen in de **constructor** van een component kunt aanmaken.

# Referenties

* [Angular Introduction: Essentials : Signals](https://angular.dev/essentials/signals#)
* [Angular In-depth guide to Signals](https://angular.dev/guide/signals#what-are-signals)
* [Typescript lambda functions](https://www.geeksforgeeks.org/what-are-arrow-lambda-functions-in-typescript/)
