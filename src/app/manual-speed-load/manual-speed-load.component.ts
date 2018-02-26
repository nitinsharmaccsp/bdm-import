import { ManualSpeedLoadService } from './manual-speed-load.service';
import { Component, OnInit, ViewChild, ElementRef, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InputModel, Modal, Globals } from '../common';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
@Component({
  selector: 'app-manual-load',
  templateUrl: './manual-speed-load.component.html',
  styleUrls: ['./manual-speed-load.component.scss'],
  providers: [ManualSpeedLoadService]
})
export class ManualSpeedLoadComponent implements OnInit {
  @ViewChild("fileUploadPath")fileUploadPath: ElementRef;
  public fileUpload: InputModel = new InputModel("fileUpload", this.global.emptyString, this.global.emptyString, "text", true);
  public modeltransfer: Modal = new Modal(this.global.emptyString, this.global.emptyString);
  public isFileValid: boolean = false;
  public file: any;
  public planPeriodFilters = [
    {
      "name": "01/01/2017-03/31/2017",
    },
    {
      "name": "04/01/2017-12/31/2017",
    }
  ]
  public benefitPeriodFilters;
  constructor(public global: Globals, private manualSpeedLoadService: ManualSpeedLoadService) {

  }
  public get loadDisabled() : boolean {
    if (this.file === undefined) return true;
    return false;
  }
  ngOnInit() {
   this.benefitPeriodFilters=this.manualSpeedLoadService.dummyVal();
  }
  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.fileUploadPath.nativeElement.value=this.global.emptyString;
  }
  fileChangeEvent(fileInput: any) {
    debugger;
    if (fileInput.target.files.length > 0) {
      this.file = fileInput.target.files[0];
      this.fileUpload = new InputModel("fileUpload", this.fileUploadPath.nativeElement.value, this.global.emptyString, "text", true);
      let allowedFileTypes = this.manualSpeedLoadService.allowedFileTypes;
      if (allowedFileTypes.indexOf(this.file.type) === -1) {
        this.modeltransfer.modelContent = this.global.unsupportedFormat;
        this.isFileValid = false;
      }
      else if (this.file.size > this.manualSpeedLoadService.allowedFileSize) {
        this.modeltransfer.modelContent = this.global.fileSizeExceeded ;
        this.isFileValid = false;
      }
      else {
        this.modeltransfer.modelContent = this.global.uploadInProgress;
        this.isFileValid = true;
      }
    }
  }
  uploadFile() {
    if (this.isFileValid) {
      debugger;
      this.manualSpeedLoadService.uploadExcel(this.file).subscribe(
        data => this.successCallback(data),
        error => this.errorCallback(error)
      )
    }
  }
  successCallback(data: any) {
    //this.modeltransfer = new Modal(this.global.emptyString, this.global.fileUploadSuccess);
    //this.clearFile();
  }
  errorCallback(data: any) {
    //this.modeltransfer = new Modal(this.global.emptyString, this.global.fileUploadFailure);
    //this.clearFile();
  }
  clearFile() {
    this.file = undefined;
    this.isFileValid = false;
    this.fileUpload = new InputModel("fileUpload", this.global.emptyString, this.global.emptyString, "text", true);
  }
}





