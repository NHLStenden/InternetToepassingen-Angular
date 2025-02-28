import {StallingDetails} from "../classes/stalling-details";

/**
 * See https://data.eindhoven.nl/explore/dataset/fietsenstallingen/information/
 */
export class StallingDetailsApiResult {
  results: StallingDetails[] = [];
  total_count: number = 0;
}
