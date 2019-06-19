import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLabelcomponentComponent } from './get-labelcomponent.component';

describe('GetLabelcomponentComponent', () => {
  let component: GetLabelcomponentComponent;
  let fixture: ComponentFixture<GetLabelcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLabelcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLabelcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
