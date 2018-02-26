import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let debugElement : DebugElement;
  let element : HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.maxLimit = 10;
    component.itemlength = 100;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('li'));
    element = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('should calculate and update the count of pages', () => {
    expect(component.count).toBe(10);
  });

it('should trigger event emitter on click', () => {
  let emittedObject : any;
  component.pageClicked.subscribe((emitObject) => emittedObject = emitObject);
  debugElement.triggerEventHandler('click',{ srcElement : { id : 2} });
  expect(emittedObject.minCount).toBe(10);
  expect(emittedObject.maxCount).toBe(19);
  });  
});
