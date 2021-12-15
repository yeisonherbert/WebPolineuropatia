import { TestBed } from '@angular/core/testing';

import { PolineService } from './poline.service';

describe('PolineService', () => {
  let service: PolineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
