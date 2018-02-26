import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.searchList();
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
  public searchListResults=[];
  public items = [
    {
      "subscriberId": "20301",
      "memberPartyId": "12983",
      "memberName": "John Doe",
      "groupNumber": "100",
      "sectionNumber": "1",
      "accountNumber": "1010100",
      "ssn": "xxx.xxx.xxxx",
      "relationship": "subscriber",
      "gender": "Male",
      "dob": "01/09/1980",
      "planPeriod": "",
      "benefitPeriod": "",
      "networkType": "",
      "accumType": ""
    },
    {
      "subscriberId": "20301",
      "memberPartyId": "12985",
      "memberName": "Mary Doe",
      "groupNumber": "100",
      "sectionNumber": "1",
      "accountNumber": "1010101",
      "ssn": "xxx.xxx.xxxx",
      "relationship": "dependent",
      "gender": "Female",
      "dob": "02/08/1972",
      "planPeriod": "",
      "benefitPeriod": "",
      "networkType": "",
      "accumType": ""
    },
    {
      "subscriberId": "20301",
      "memberPartyId": "12984",
      "memberName": "Sally Doe",
      "groupNumber": "100",
      "sectionNumber": "1",
      "accountNumber": "1010110",
      "ssn": "xxx.xxx.xxxx",
      "relationship": "dependent",
      "gender": "Female",
      "dob": "03/09/2000",
      "planPeriod": "",
      "benefitPeriod": "",
      "networkType": "",
      "accumType": ""
    }
  ];
  checkboxList(checkbox) {
    var items: Array<any> = [];
    for (var i = 0; i <= checkbox.length - 1; i++) {

      items.push(this.items[i]);

    }
    return items;
  }
  searchList() {
    var items: Array<any> = [];
    for (var i = 0; i <= this.items.length - 1; i++) {

      items.push(this.items[i]);

    }
    this.searchListResults= items;
  }

}
