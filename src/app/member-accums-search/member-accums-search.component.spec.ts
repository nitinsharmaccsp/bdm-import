import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from './../common/components/datepicker/datepicker.component';
import { ModalComponent } from './../common/components/modal/modal.component';
import { InputComponent } from './../common/components/input/input.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAccumsSearchComponent } from './member-accums-search.component';

describe('MemberAccumsSearchComponent', () => {
  let component: MemberAccumsSearchComponent;
  let fixture: ComponentFixture<MemberAccumsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAccumsSearchComponent, InputComponent, ModalComponent,DatepickerComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAccumsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
