import { TestBed } from '@angular/core/testing';

import { MarksGradeService } from './marks-grade.service';

describe('MarksGradeService', () => {
  let service: MarksGradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarksGradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
