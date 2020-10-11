import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontcmsSettingComponent } from './frontcms-setting.component';

describe('FrontcmsSettingComponent', () => {
  let component: FrontcmsSettingComponent;
  let fixture: ComponentFixture<FrontcmsSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontcmsSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontcmsSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
