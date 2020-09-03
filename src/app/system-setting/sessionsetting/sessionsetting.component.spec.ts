import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsettingComponent } from './sessionsetting.component';

describe('SessionsettingComponent', () => {
  let component: SessionsettingComponent;
  let fixture: ComponentFixture<SessionsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
