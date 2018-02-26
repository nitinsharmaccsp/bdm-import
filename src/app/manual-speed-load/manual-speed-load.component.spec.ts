import { Observable } from 'rxjs/Rx';
import { GlobalErrorHandlerService } from '@app/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from './../core/authentication/authentication.service';
import { GlobalService } from './../core/global/global.service';
import { Globals } from './../common';
import { ManualSpeedLoadService } from './manual-speed-load.service';
import { Http, HttpModule } from '@angular/http';
import { ModalComponent } from './../common';
import { Modal } from './../common';
import { InputComponent } from './../common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ManualSpeedLoadComponent } from './manual-speed-load.component';
import { FormsModule }   from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
export class ManualLoadMockService {
  contructor() {}
  uploadExcel() : Observable<any> {
    return Observable.of({ response : true });
  }
}

describe('ManualLoadComponent', () => {
  let component: ManualSpeedLoadComponent;
  let fixture: ComponentFixture<ManualSpeedLoadComponent>;
  let debugElement : DebugElement;
  let element : HTMLElement;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualSpeedLoadComponent,
      InputComponent, ModalComponent ],
      imports: [ FormsModule,HttpModule,RouterTestingModule ],
      providers:[ 
      { provide : ManualSpeedLoadService, useClass : ManualLoadMockService},
       Globals,GlobalService,AuthenticationService,GlobalErrorHandlerService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualSpeedLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('button'));
    element = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate file size', () => {
    component.fileChangeEvent({
      target : {
        files : [
          {
            name : 'Something.xlsx',
            type : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            size : 8000000
          }
        ]
      }
    });
    expect(component.modeltransfer.modelContent).toBe("File size exceeds 5 MB. Select file with size less than or equal to 5 MB");
    });  
    it('should validate file type', () => {
      component.fileChangeEvent({
        target : {
          files : [
            {
              name : 'Something.xlsx',
              type : 'application/vnd.openxmlformats-officedocument',
              size : 40000
            }
          ]
        }
      });
      expect(component.modeltransfer.modelContent).toBe("File type not supported. Please select an Excel file in .xls, .xlsx and try again");
      });  
      it('should upload the file', () => {
        component.fileChangeEvent({
          target : {
            files : [
              {
                name : 'Something.xlsx',
                type : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                size : 524288
              }
            ]
          }
        });
        expect(component.modeltransfer.modelContent).toBe("File uploading");
        });  
});
