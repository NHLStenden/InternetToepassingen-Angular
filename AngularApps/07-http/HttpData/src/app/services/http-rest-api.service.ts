import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StallingData} from '../classes/stalling-data';
import {Observable} from 'rxjs';
import {StallingDetailsApiResult} from './stalling-details-api.result';


@Injectable({
  providedIn: 'root'
})
export class HttpRestApiService {
  private url = 'https://data.eindhoven.nl/api/explore/v2.1/catalog/datasets/fietsenstallingen/records';
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = inject(HttpClient);
  }

  getFietsenstallingen(): Observable<StallingData> {
    return this.httpClient.get<StallingData>(this.url);
  }

  /**
   * /api/explore/v2.1/catalog/datasets/fietsenstallingen/records?where=objectid%3D961&limit=20
    */

  getOneFietsenstalling(objectID: number): Observable<StallingDetailsApiResult> {
    return this.httpClient.get<StallingDetailsApiResult>(this.url + `?where=objectid=${objectID}`);
  }

}
