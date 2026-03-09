import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StallingDetails} from '../../classes/stalling-details';
import {HttpRestApiService} from '../../services/http-rest-api.service';
import {HttpErrorResponse} from '@angular/common/http';
import {StallingDetailsApiResult} from '../../services/stalling-details-api.result';


@Component({
  selector: 'stalling-info',
  imports: [],
  templateUrl: './stalling-info.component.html',
  styleUrl: './stalling-info.component.css'
})
export class StallingInfoComponent implements OnInit {
  stalling: StallingDetails | undefined = undefined;
  protected idStalling: number | undefined = undefined;

  constructor(private route: ActivatedRoute,
              private http: HttpRestApiService) {
  }

  ngOnInit(): void {
    /** Haal id uit de route en converteer naar een number */
    this.idStalling = parseInt(this.route.snapshot.params['id']);
    /** roep de webservice aan */
    if (! this.idStalling) {
      return ;
    }
    this.http.getOneFietsenstalling(this.idStalling).subscribe({
      next: (stalling: StallingDetailsApiResult) => {

        /** Als het aantal antwoorden precies 1 is hebben we een resultaat */
        if (stalling.total_count === 1) {
          this.stalling = stalling.results[0];
        }
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      }
    });
    console.log(this.stalling);
  }

}
