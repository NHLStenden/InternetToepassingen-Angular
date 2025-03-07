import {Component, computed, effect, Signal, signal, WritableSignal} from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-fibonacci-calculator',
  imports: [
    DecimalPipe,
  ],
  templateUrl: './fibonacci-calculator.component.html',
  styleUrl: './fibonacci-calculator.component.css'
})
export class FibonacciCalculatorComponent {

  counter: WritableSignal<number> = signal(0);
  fibonacciCalculator: Signal<number> = signal(0);
  nrOfUpdates: number = 0;
  history: string[] = [];

  constructor() {
    effect(() => {
      this.history.push(`${this.counter()} = ${this.fibonacciCalculator()} `);
    });
    this.fibonacciCalculator = computed(() => this.fib(this.counter()));
  }

  fib(nr: number) : number {
    if (nr == 0) {
      return 0;
    }
    if (nr == 1) {
      return 1;
    }
    return this.fib(nr - 1) + this.fib(nr -2);
  }

  increaseCounter() {
    this.counter.update(x => x + 1);
  }

  decreaseCounter() {
    this.counter.update(x => x - 1);
  }

}
