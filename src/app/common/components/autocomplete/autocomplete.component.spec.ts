import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoCompleteComponent } from './autocomplete.component';
import { By }              from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA }    from '@angular/core';


describe('AutocompleteComponent', () => {
  let component: AutoCompleteComponent;
  let fixture: ComponentFixture<AutoCompleteComponent>;
  let debugElement : DebugElement;
  let element : HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.autoCompleteSearchList=[{"title": 'aditi', "id": '1'},
  {"title": 'yash', "id": '2'},
  {"title": 'nitin', "id": '3'},
  {"title": 'anil', "id": '4'},
  {"title": 'somdatt', "id": '5'},
  {"title": 'rohit', "id": '1'},
  {"title": 'nitish', "id": '2'},
  {"title": 'koyel', "id": '3'},
  {"title": 'shreeram', "id": '4'},
  {"title": 'sourin', "id": '5'}];
    //debugElement = fixture.debugElement.query(By.css('p'));
   // element = debugElement.nativeElement;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  it('should emit value', () => {
    let emittedObject : any;
  component.selectedValue.subscribe((emitObject) => emittedObject = emitObject);
  component.emitSelected("aditi");
  expect(emittedObject.value).toBe("aditi");
  });
  // To check if the change is reflected onto the UI
});
