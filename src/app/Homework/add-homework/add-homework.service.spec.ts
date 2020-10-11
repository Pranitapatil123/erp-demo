import { TestBed } from '@angular/core/testing';

import { AddHomeworkService } from './add-homework.service';

describe('AddHomeworkService', () => {
  let service: AddHomeworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddHomeworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
