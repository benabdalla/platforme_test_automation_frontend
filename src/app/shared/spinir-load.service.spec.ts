import { TestBed } from '@angular/core/testing';

import { SpinirLoadService } from './spinir-load.service';

describe('SpinirLoadService', () => {
  let service: SpinirLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinirLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
