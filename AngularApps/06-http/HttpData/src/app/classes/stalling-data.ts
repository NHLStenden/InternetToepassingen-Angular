import {StallingDetails} from './stalling-details';

export class StallingData {
  total_count: number;
  results: StallingDetails[];

  constructor() {
    this.total_count = 0;
    this.results = [];
  }
}
