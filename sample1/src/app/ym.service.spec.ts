import { TestBed } from '@angular/core/testing';

import { YmService } from './ym.service';

describe('YmService', () => {
  let service: YmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
