import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {StallingData} from '../classes/stalling-data';

@Injectable({
  providedIn: 'root'
})
export class StallingDataService {
  public stallingen: StallingData | undefined = undefined;

  url = 'https://data.eindhoven.nl/api/explore/v2.1/catalog/datasets/fietsenstallingen/records?limit=20';

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this.url).subscribe({
      next: (data: any) => {
        this.stallingen = data;
        console.log(this.stallingen);
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
      }
    })
  }

}
