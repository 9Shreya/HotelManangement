import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UttarComponent } from './uttar.component';

describe('UttarComponent', () => {
  let component: UttarComponent;
  let fixture: ComponentFixture<UttarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UttarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UttarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
