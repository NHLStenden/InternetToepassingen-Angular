import { TestBed } from '@angular/core/testing';

import { DataSingletonService } from './data-singleton.service';

describe('DataSingletonService', () => {
  let service: DataSingletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSingletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
