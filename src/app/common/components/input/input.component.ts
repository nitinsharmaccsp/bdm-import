import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'inputComponent',
  providers: [
  ],
  templateUrl:'./input.component.html'
})
export class InputComponent implements OnInit {
  @Input() inputData: any;
   @Output() inputChangeValue : EventEmitter<any> = new EventEmitter<any>(); 
     constructor() {}
 public change(ev,inputVal){
    this.inputChangeValue.emit({"val":inputVal});
    console.log(ev);
  }
  public ngOnInit() {
  }
}

