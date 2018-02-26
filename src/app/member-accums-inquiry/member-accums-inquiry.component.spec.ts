import { FormsModule } from '@angular/forms';
import { UtilizationTableComponent } from './../common/components/utilization-table/utilization-table.component';
import { TableDropdownComponent } from './../common/components/table-dropdown/table-dropdown.component';
import { MemberUtilizationCollapseComponent } from './../member-utilization-collapse/member-utilization-collapse.component';
import { SearchResultsComponent } from './../search-results/search-results.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAccumsInquiryComponent } from './member-accums-inquiry.component';

describe('MemberAccumsInquiryComponent', () => {
  let component: MemberAccumsInquiryComponent;
  let fixture: ComponentFixture<MemberAccumsInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAccumsInquiryComponent,SearchResultsComponent,MemberUtilizationCollapseComponent,TableDropdownComponent,UtilizationTableComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAccumsInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
