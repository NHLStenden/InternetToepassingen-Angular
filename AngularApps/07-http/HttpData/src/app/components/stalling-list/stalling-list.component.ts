import {Component, inject, OnInit} from '@angular/core';
import {StallingDataRowComponent} from '../stalling-table-row/stalling-data-row.component';
import {StallingData} from '../../classes/stalling-data';
import {HttpRestApiService} from '../../services/http-rest-api.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'stalling-list',
  imports: [
    StallingDataRowComponent
  ],
  templateUrl: './stalling-list.component.html',
  styleUrl: './stalling-list.component.css'
})
export class StallingListComponent implements OnInit {

  stalling: StallingData | undefined = undefined;
  private http: HttpRestApiService;

  constructor() {
    this.http = inject(HttpRestApiService);
  }

  ngOnInit(): void {
    this.http.getFietsenstallingen().subscribe({
      next: data => {
        this.stalling = data;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      }
    })
  }
}
