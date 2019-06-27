import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrachiconComponent } from './trachicon.component';

describe('TrachiconComponent', () => {
  let component: TrachiconComponent;
  let fixture: ComponentFixture<TrachiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrachiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrachiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
