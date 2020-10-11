import { TestBed } from '@angular/core/testing';

import { SessionsettingService } from './sessionsetting.service';

describe('SessionsettingService', () => {
  let service: SessionsettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionsettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
