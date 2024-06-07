import { TestBed } from '@angular/core/testing';

import { FilterFService } from './filterF.service';

describe('FilterFService', () => {
  let service: FilterFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
