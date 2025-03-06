import {Component, Input} from '@angular/core';

@Component({
  selector: 'section-with-content',
  imports: [],
  templateUrl: './section-with-content.component.html',
  styleUrl: './section-with-content.component.css'
})
export class SectionWithContentComponent {
  @Input() title: string | undefined = undefined;
}
