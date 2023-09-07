import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallControlComponent } from './call-control.component';

describe('CallControlComponent', () => {
  let component: CallControlComponent;
  let fixture: ComponentFixture<CallControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
