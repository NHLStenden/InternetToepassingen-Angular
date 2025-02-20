import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StallingData} from '../classes/stalling-data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StallingDataService {
  public stallingen$: Observable<StallingData> | undefined = undefined;
  public stallingen: StallingData | undefined = undefined;

  url = 'https://data.eindhoven.nl/api/explore/v2.1/catalog/datasets/fietsenstallingen/records?limit=20';

  constructor(private httpClient: HttpClient) {
    this.stallingen$ = this.httpClient.get<StallingData>(this.url);
  }

}
