import { FormsModule } from '@angular/forms';
import { TableDropdownComponent } from './../common/components/table-dropdown/table-dropdown.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsComponent,TableDropdownComponent ],
      imports:[FormsModule]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
