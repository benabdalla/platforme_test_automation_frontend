import { TestBed } from '@angular/core/testing';

import { DemandeActionServiceService } from './demande-action-service.service';

describe('DemandeActionServiceService', () => {
  let service: DemandeActionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeActionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
