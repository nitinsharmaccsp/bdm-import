import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  //URLS
  authenticationUrl: string = "http://34.208.243.62:4000/generateToken";
  manualSpeedLoadUrl : string = "https://accums-service-untenantable-deism.cfaa.hcsctest.net/accums-service/manual-accums-csv";

  emptyString = "";
  
  //MANUAL SPEED LOAD
  browseButton : string = "Browse For File";
  fileSelect:string = "Select File to Load:";
  name:string = "File Name";
  unsupportedFormat : string = "File type not supported. Please select an Excel file in .xls, .xlsx and try again";
  fileSizeExceeded : string = "File size exceeds 5 MB. Select file with size less than or equal to 5 MB"; 
  uploadInProgress : string = "File uploading";
  fileUploadSuccess : string = "File Uploaded Successfully";
  fileUploadFailure : string = "File Upload Failed";
  xlsxFormat : string = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  xlsFormat : string = "application/vnd.ms-excel";
  defautAllowedFileSize : number = 5000000;
}