import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'utilization-table',
  templateUrl: './utilization-table.component.html',
  styleUrls: ['./utilization-table.component.css']
})
export class UtilizationTableComponent implements OnInit {
  @Input() columns : Array<string> ;
  public memberUtilizationObject : any;
  constructor() { 
    this.columns = ['Accumulator Name', 'Period', 'Plan Period Utilization',
   'Plan Period Limit', 'Accums Remaining'];
    this.memberUtilizationObject = {
      innDeductible : [ {
        period : '01/01-2017 - 03/31/2017',
        planPeriodUtilization : '$600',
        planPeriodLimit : '$1000',
        accumsRemaining : '$400'
      },
      {
        period : '04/01-2017 - 12/31/2017',
        planPeriodUtilization : '$400',
        planPeriodLimit : '$1000',
        accumsRemaining : '$600'
      },
      
    ],
      oonDeductible : [ {
        period : '01/01-2017 - 03/31/2017',
        planPeriodUtilization : '$200',
        planPeriodLimit : '$2000',
        accumsRemaining : '$1800'
      },
      {
        period : '01/01-2017 - 03/31/2017',
        planPeriodUtilization : '$200',
        planPeriodLimit : '$2000',
        accumsRemaining : '$1800'
      },
    ]
    }
  }

  ngOnInit() {
  }

}
