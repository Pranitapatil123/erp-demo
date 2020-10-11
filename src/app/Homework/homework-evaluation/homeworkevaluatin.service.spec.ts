import { TestBed } from '@angular/core/testing';

import { HomeworkevaluatinService } from './homeworkevaluatin.service';

describe('HomeworkevaluatinService', () => {
  let service: HomeworkevaluatinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeworkevaluatinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
