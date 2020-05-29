import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RishikeshComponent } from './rishikesh.component';

describe('RishikeshComponent', () => {
  let component: RishikeshComponent;
  let fixture: ComponentFixture<RishikeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RishikeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RishikeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
