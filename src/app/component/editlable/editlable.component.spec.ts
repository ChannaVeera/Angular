import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlableComponent } from './editlable.component';

describe('EditlableComponent', () => {
  let component: EditlableComponent;
  let fixture: ComponentFixture<EditlableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
