import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssamComponent } from './assam.component';

describe('AssamComponent', () => {
  let component: AssamComponent;
  let fixture: ComponentFixture<AssamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
