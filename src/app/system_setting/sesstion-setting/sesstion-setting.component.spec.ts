import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesstionSettingComponent } from './sesstion-setting.component';

describe('SesstionSettingComponent', () => {
  let component: SesstionSettingComponent;
  let fixture: ComponentFixture<SesstionSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesstionSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesstionSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
