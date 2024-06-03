import { TestBed } from '@angular/core/testing';

import { AddFavService } from './add-fav.service';

describe('AddFavService', () => {
  let service: AddFavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
