import { TestBed } from '@angular/core/testing';

import { AgrimandiSearchService } from './agrimandi-search.service';

describe('AgrimandiSearchService', () => {
  let service: AgrimandiSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgrimandiSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
