import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../common';

@Component({
  selector: 'member-utilization-collapse',
  templateUrl: './member-utilization-collapse.component.html',
  styleUrls: ['./member-utilization-collapse.component.scss']
})
export class MemberUtilizationCollapseComponent implements OnInit {
  @Input() member : Member = new Member("","");
  public isExpanded : boolean;
  @Input() isFamily : boolean;
  constructor() { 
  }

  ngOnInit() {
  }

}
