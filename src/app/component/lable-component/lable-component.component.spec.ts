import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LableComponentComponent } from './lable-component.component';

describe('LableComponentComponent', () => {
  let component: LableComponentComponent;
  let fixture: ComponentFixture<LableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
