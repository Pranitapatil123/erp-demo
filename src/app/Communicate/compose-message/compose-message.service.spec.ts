import { TestBed } from '@angular/core/testing';

import { ComposeMessageService } from './compose-message.service';

describe('ComposeMessageService', () => {
  let service: ComposeMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposeMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
