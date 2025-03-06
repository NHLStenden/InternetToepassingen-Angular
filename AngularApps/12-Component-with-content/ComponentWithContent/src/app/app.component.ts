import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SectionWithContentComponent} from './components/section-with-content/section-with-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    SectionWithContentComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ComponentWithContent';
}
