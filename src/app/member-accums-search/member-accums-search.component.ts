import { Component, OnInit } from '@angular/core';
import { InputModel } from '../common';


@Component({
  selector: 'app-member-accums-search',
  templateUrl: './member-accums-search.component.html',
  styleUrls: ['./member-accums-search.component.scss'],
  
})
export class MemberAccumsSearchComponent implements OnInit {
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
  public subscriberId :InputModel  = new InputModel("subscriberId","","enter subscriber id","text",false);
  public groupNumber :InputModel  = new InputModel("groupNumber","","enter group number","text",false);
  public memberFName :InputModel  = new InputModel("memberFName","","enter member first name","text",false);
  public memberLName :InputModel  = new InputModel("memberLName","","enter member last name","text",false);
  public stateCode :InputModel  = new InputModel("stateCode","","enter status code","text",false);
  public sectionNumber :InputModel  = new InputModel("sectionNumber","","enter section number","text",false);
  public accountNumber :InputModel  = new InputModel("accountNumber","","enter account number","text",false);
  public ssn :InputModel  = new InputModel("ssn","","enter ssn","text",false);
  constructor() { }

  ngOnInit() {
  }

 
}
