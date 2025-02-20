import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {StallingDetails} from '../../classes/stalling-details';

@Component({
  selector: '[stalling-table-row]',
  imports: [
    RouterLink
  ],
  templateUrl: './stalling-data-row.component.html',
  styleUrl: './stalling-data-row.component.css'
})
export class StallingDataRowComponent {
  @Input() stalling: StallingDetails | undefined = undefined;
}
