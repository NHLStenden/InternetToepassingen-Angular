import {Component, computed, effect, Signal, signal, WritableSignal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FibonacciCalculatorComponent} from './fibonacci-calculator/fibonacci-calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    FibonacciCalculatorComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals';
}
