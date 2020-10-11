import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkEvaluationComponent } from './homework-evaluation.component';

describe('HomeworkEvaluationComponent', () => {
  let component: HomeworkEvaluationComponent;
  let fixture: ComponentFixture<HomeworkEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
