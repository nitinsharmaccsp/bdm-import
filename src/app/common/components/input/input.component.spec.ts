import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { FormsModule }   from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let debugElement : DebugElement;
  let element : HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('input'));
    element = debugElement.nativeElement;
    component.inputData={"name":"input" ,  "value":"string",  "placeholder":"string" ,  "type":"text"};
    fixture.detectChanges();
  
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  
   /*it('should emit value', () => {
    let emittedObject : any;
  component.inputChangeValue.subscribe((emitObject) => emittedObject = emitObject);
  component.change(new KeyboardEvent("keypress",{ 'key' : 'a'}));
  expect(emittedObject.value.key).toBe("a");
  });
  */


  // To check if the change is reflected onto the UI

});
