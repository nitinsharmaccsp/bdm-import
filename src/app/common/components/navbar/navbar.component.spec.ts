import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let debugElement : DebugElement;
  let element : HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  // To check if the change is reflected onto the UI

});
