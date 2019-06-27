import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrachComponent } from './trach.component';

describe('TrachComponent', () => {
  let component: TrachComponent;
  let fixture: ComponentFixture<TrachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
