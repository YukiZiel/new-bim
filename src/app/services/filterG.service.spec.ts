import { TestBed } from '@angular/core/testing';

import { FilterGService } from './filterG.service';

describe('FilterGService', () => {
  let service: FilterGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
