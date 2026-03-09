import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {getRouteToHomepage} from './helpers/RouteSupport';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Routing - Studenten';
  protected readonly getRouteToHomepage = getRouteToHomepage;
}
