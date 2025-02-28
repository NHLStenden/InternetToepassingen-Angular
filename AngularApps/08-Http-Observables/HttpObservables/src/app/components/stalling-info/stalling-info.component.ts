import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StallingDataService} from '../../services/stalling-data.service';
import {StallingDetails} from '../../classes/stalling-details';
import {Observable, map, filter, take, mergeMap, first, shareReplay} from 'rxjs';
import {StallingData} from '../../classes/stalling-data';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'stalling-info',
  imports: [
    AsyncPipe
  ],
  templateUrl: './stalling-info.component.html',
  styleUrl: './stalling-info.component.css'
})
export class StallingInfoComponent implements OnInit {

  stalling$: Observable<StallingDetails> | undefined = undefined;

  constructor(private route: ActivatedRoute,
              private dataService: StallingDataService) {
    const id = parseInt(this.route.snapshot.params['id']);

    if (this.dataService.stallingen$) {
      this.stalling$ = this.dataService.stallingen$.pipe(
        map((data: StallingData) => data.results), // Haal de array op
        mergeMap((stallingen: StallingDetails[]) => stallingen), // Maak er een stream van objecten van
        filter((stalling: StallingDetails) => stalling.objectid === id), // Zoek de juiste
        first(), // Stop na het eerste gevonden object
        shareReplay(1) // voorkom dat het request steeds opnieuw informatie ophaalt vanuit de HTML
      );

    }
  }

  ngOnInit(): void {
  }

}
