import { GlobalErrorHandlerService } from '@app/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastOptions } from 'ng2-toastr/ng2-toastr';
import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorComponent ],
      providers:[ToastsManager, ToastOptions, GlobalErrorHandlerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
