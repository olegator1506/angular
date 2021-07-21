import { TestBed } from '@angular/core/testing';

import { DacService } from './dac.service';

describe('DacService', () => {
  let service: DacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
