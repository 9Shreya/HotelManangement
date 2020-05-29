import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayfertComponent } from './sayfert.component';

describe('SayfertComponent', () => {
  let component: SayfertComponent;
  let fixture: ComponentFixture<SayfertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayfertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
