import { Component, OnInit } from '@angular/core';
import {Member} from '../common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA
],
})
@Component({
  selector: 'app-member-accums-inquiry',
  templateUrl: './member-accums-inquiry.component.html',
  styleUrls: ['./member-accums-inquiry.component.scss']
})
export class MemberAccumsInquiryComponent implements OnInit {
  public firstMember : Member;
  public secondMember : Member; 
  public familyMember : Member;
  constructor() { }

  ngOnInit() {
    this.firstMember = new Member('John Doe', '12983');
    this.secondMember = new Member('Mary Doe', '12985');
    this.familyMember = new Member('John Doe','12983','20301');
  }

  public planPeriodFilters = [
    {
      "name": "01/01/2017-03/31/2017",
    },
    {
      "name": "04/01/2017-12/31/2017",
    }
  ];
  public benefitPeriodFilters = [
    {
      "name": "2017",
    }
  ];
  public networkTypeFilters = [
    {
      "name": "In Network",
    },
    {
      "name": "Out Of Network",
    }
  ];
  public accumTypeFilters = [
    {
      "name": "Copay",
    },
    {
      "name": "Deductible",
    },
    {
      "name": "Coinsurance",
    },
    {
      "name": "OPX",
    },
    {
      "name": "Maximum",
    }
  ];
}
