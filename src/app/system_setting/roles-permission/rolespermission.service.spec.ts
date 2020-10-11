import { TestBed } from '@angular/core/testing';

import { RolespermissionService } from './rolespermission.service';

describe('RolespermissionService', () => {
  let service: RolespermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolespermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
