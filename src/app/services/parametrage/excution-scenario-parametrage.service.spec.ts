import { TestBed } from '@angular/core/testing';

import { ExcutionScenarioParametrageService } from './excution-scenario-parametrage.service';

describe('ExcutionScenarioParametrageService', () => {
  let service: ExcutionScenarioParametrageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcutionScenarioParametrageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
