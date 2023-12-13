import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorloginComponent } from './errorlogin.component';

describe('ErrorloginComponent', () => {
  let component: ErrorloginComponent;
  let fixture: ComponentFixture<ErrorloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorloginComponent]
    });
    fixture = TestBed.createComponent(ErrorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
