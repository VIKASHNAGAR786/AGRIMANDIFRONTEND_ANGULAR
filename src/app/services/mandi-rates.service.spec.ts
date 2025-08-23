import { TestBed } from '@angular/core/testing';

import { MandiRatesService } from './mandi-rates.service';

describe('MandiRatesService', () => {
  let service: MandiRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MandiRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
