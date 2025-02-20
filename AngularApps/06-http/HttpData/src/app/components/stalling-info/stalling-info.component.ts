import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StallingDataService} from '../../services/stalling-data.service';
import {StallingDetails} from '../../classes/stalling-details';

@Component({
  selector: 'stalling-info',
  imports: [],
  templateUrl: './stalling-info.component.html',
  styleUrl: './stalling-info.component.css'
})
export class StallingInfoComponent implements OnInit {
   stalling: StallingDetails | undefined = undefined;

  constructor(private route: ActivatedRoute,
              private dataService: StallingDataService) {
    const id = parseInt(this.route.snapshot.params['id']);
    this.stalling = this.dataService.stallingen?.results.find(stalling => stalling.objectid === id);
    console.log(this.stalling);
  }

  ngOnInit(): void {
  }

}
