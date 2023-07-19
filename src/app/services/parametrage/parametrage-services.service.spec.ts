import { TestBed } from '@angular/core/testing';

import { ParametrageServicesService } from './parametrage-services.service';

describe('ParametrageServicesService', () => {
  let service: ParametrageServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametrageServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
