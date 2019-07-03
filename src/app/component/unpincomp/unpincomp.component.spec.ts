import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpincompComponent } from './unpincomp.component';

describe('UnpincompComponent', () => {
  let component: UnpincompComponent;
  let fixture: ComponentFixture<UnpincompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpincompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpincompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
