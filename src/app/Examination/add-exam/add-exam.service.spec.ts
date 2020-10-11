import { TestBed } from '@angular/core/testing';

import { AddExamService } from './add-exam.service';

describe('AddExamService', () => {
  let service: AddExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
