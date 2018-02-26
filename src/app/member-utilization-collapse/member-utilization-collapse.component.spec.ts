import { UtilizationTableComponent } from './../common/components/utilization-table/utilization-table.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberUtilizationCollapseComponent } from './member-utilization-collapse.component';

describe('MemberUtilizationCollapseComponent', () => {
  let component: MemberUtilizationCollapseComponent;
  let fixture: ComponentFixture<MemberUtilizationCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberUtilizationCollapseComponent,UtilizationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberUtilizationCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
