import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadhyaComponent } from './madhya.component';

describe('MadhyaComponent', () => {
  let component: MadhyaComponent;
  let fixture: ComponentFixture<MadhyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadhyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadhyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
