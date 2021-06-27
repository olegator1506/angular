import { TestBed } from '@angular/core/testing';

import { YmHttpService } from './ym-http.service';

describe('YmHttpService', () => {
  let service: YmHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YmHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
