import { Component, OnInit , AfterViewInit ,ViewChild ,ElementRef} from '@angular/core';
import datepicker from 'bootstrap-datepicker';

declare var $ : any;
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit , AfterViewInit{
  @ViewChild('datepicker') datepicker : ElementRef;

  constructor () { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
  }
}
