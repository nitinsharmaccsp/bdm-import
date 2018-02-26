
import {
    Component,
    OnInit,
    Input,
    ViewChild,
    EventEmitter,
    Output,
    ViewEncapsulation
  } from '@angular/core';
 import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from 'ng-auto-complete';
  @Component({
    selector: 'autoCompleteComponent',
    providers: [
    ],
    templateUrl: './autocomplete.component.html',
    styleUrls:['./autocomplete.component.css'],
    encapsulation : ViewEncapsulation.None
  })
  export class AutoCompleteComponent implements OnInit {
    @Input() autoCompleteSearchList;
      @Output() selectedValue : EventEmitter<any> = new EventEmitter<any>(); 
     @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;
     public selected;
     emitSelected(item){
       this.selectedValue.emit({"value": item});
     }
        Selected(item: SelectedAutocompleteItem) {
           this.selected=item.item.title;
           console.log();
           this.emitSelected(this.selected);
            
        }
    constructor() {}
   public group;
    public ngOnInit() {
      this.group = [this.autoCompleteSearchList];  
    }
    
  }
  
  