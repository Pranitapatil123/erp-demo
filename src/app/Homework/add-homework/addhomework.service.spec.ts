import { TestBed } from '@angular/core/testing';

import { AddhomeworkService } from './addhomework.service';

describe('AddhomeworkService', () => {
  let service: AddhomeworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddhomeworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
