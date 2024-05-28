import { TestBed } from '@angular/core/testing';

import { BimService } from './bim.service';

describe('BimService', () => {
  let service: BimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
