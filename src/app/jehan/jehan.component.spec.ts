import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JehanComponent } from './jehan.component';

describe('JehanComponent', () => {
  let component: JehanComponent;
  let fixture: ComponentFixture<JehanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JehanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JehanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
