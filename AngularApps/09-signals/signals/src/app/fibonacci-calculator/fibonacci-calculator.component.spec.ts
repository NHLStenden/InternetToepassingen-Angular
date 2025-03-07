import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciCalculatorComponent } from './fibonacci-calculator.component';

describe('FibonacciCalculatorComponent', () => {
  let component: FibonacciCalculatorComponent;
  let fixture: ComponentFixture<FibonacciCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FibonacciCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FibonacciCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
