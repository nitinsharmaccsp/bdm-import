import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from './../common/components/datepicker/datepicker.component';
import { datepicker } from 'bootstrap-datepicker';
import { InputComponent } from './../common/components/input/input.component';
import { MemberAccumsSearchComponent } from './../member-accums-search/member-accums-search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,FormsModule],
      declarations: [ TabsComponent,MemberAccumsSearchComponent,InputComponent,DatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
