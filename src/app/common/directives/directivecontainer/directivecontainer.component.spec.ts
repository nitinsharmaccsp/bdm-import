import { CurrencyPipeModule } from './../../modules/currency-pipe/currency-pipe.module';
import { CurrencyFormatterDirective } from './../currency-formatter.directive';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DirectivecontainerComponent } from './directivecontainer.component';
import { DebugElement }    from '@angular/core';
import { FormsModule } from '@angular/forms';


describe('DirectivecontainerComponent', () => {
  let component: DirectivecontainerComponent;
  let fixture: ComponentFixture<DirectivecontainerComponent>;
  let inputElement: DebugElement;
  let pipe : CurrencyPipeModule;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ DirectivecontainerComponent , CurrencyFormatterDirective ]
    })
    .compileComponents();
  }));

  beforeEach((done) => {
    fixture = TestBed.createComponent(DirectivecontainerComponent);
    component = fixture.componentInstance;
    component.datacontent = { value :123456};
    component = fixture.componentInstance;
    pipe = new CurrencyPipeModule();
    component.result;    
    fixture.detectChanges();
    inputElement = fixture.debugElement.query(By.css('input'));
    setTimeout(function() {
      component.result = +inputElement.nativeElement.value;
      done();
    },500);    
  });

  it('should display masked value ', () => {
    inputElement.triggerEventHandler('blur', null);
    // setTimeout(function() {
    //   component.result = inputEl.nativeElement.value;
    // },500);
    // console.log(inputEl);
    expect(pipe.transform(component.result)).toBe("123,456"); 
 });
});
