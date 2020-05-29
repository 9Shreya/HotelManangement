import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovotelComponent } from './novotel.component';

describe('NovotelComponent', () => {
  let component: NovotelComponent;
  let fixture: ComponentFixture<NovotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
