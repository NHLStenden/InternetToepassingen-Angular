# ComponentWithContent

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

Dit voorbeeld laat zien hoe je bij het gebruik van een component niet alleen informatie
kunt meesturen in de attributen, maar ook als inhoud van een element.

In onderstaande voorbeeld staat de HTML voor component `app.component.html`. Deze gebruikt een zelfgemaakte
component `section-with-content`. Er is een zelf gedefinieerd attribuut `title`. Deze krijgt een waarde mee (let
op dat het dit keer niet met `[title]` gaat omdat we een vaste tekst meegeven en geen variabele).

```html

<main>
  <article>
    <section-with-content title="Dit is een test">
      <P>Dit is de inhoud van de component</P>
    </section-with-content>
  </article>
</main>

```

Wat verder opvalt is het element `section-with-content` niet leeg is. Voorheen zagen we vooral dit:

```html

<main>
  <article>
    <section-with-content title="Dit is een test"></section-with-content>
  </article>
</main>
```

Het element wordt geopend met `<section-with-content>` en wordt meteen gesloten met `</section-with-content>`.

In dit nieuwe voorbeeld zien we dat er wel degelijk (HTML) inhoud in zit, namelijk een `<P>`-element.

In de component kunnen we deze meegestuurde inhoud plaatsen in een speciaal daarvoor aangewezen element:
`<ng-content/>`. Zie onderstaande HTML van de component `section-with-content`.

```html

<section>
  <header>
    <h3>{{ title }}</h3>
  </header>
  <ng-content/>
</section>
```

See https://angular.dev/guide/components/content-projection for documentation.
