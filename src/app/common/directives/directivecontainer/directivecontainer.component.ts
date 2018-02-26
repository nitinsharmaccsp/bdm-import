import { CurrencyPipeModule } from './../../modules/currency-pipe/currency-pipe.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivecontainer',
  templateUrl: './directivecontainer.component.html',
  styleUrls: ['./directivecontainer.component.css'],
  providers:[CurrencyPipeModule]
})
export class DirectivecontainerComponent implements OnInit {
  public  datacontent:any;
  public result:any;
  constructor() { }

  ngOnInit() {
  }

}
