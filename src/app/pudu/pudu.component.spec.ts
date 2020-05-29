import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuduComponent } from './pudu.component';

describe('PuduComponent', () => {
  let component: PuduComponent;
  let fixture: ComponentFixture<PuduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
