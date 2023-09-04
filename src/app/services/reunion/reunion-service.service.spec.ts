import { TestBed } from '@angular/core/testing';

import { ReunionServiceService } from './reunion-service.service';

describe('ReunionServiceService', () => {
  let service: ReunionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReunionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
