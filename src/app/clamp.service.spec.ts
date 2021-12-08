import { TestBed } from '@angular/core/testing';

import { ClampService } from './clamp.service';

describe('ClampService', () => {
  let service: ClampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
