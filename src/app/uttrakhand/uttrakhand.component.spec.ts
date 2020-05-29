import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UttrakhandComponent } from './uttrakhand.component';

describe('UttrakhandComponent', () => {
  let component: UttrakhandComponent;
  let fixture: ComponentFixture<UttrakhandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UttrakhandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UttrakhandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
