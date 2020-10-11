import { TestBed } from '@angular/core/testing';

import { AdmitcardService } from './admitcard.service';

describe('AdmitcardService', () => {
  let service: AdmitcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmitcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
