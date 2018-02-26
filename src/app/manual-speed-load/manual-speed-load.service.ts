import { Globals } from './../common';
import { GlobalService } from '../core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class ManualSpeedLoadService {
    public allowedFileTypes: Array<string> = [this.globals.xlsFormat, this.globals.xlsxFormat];
    public dynamicFileSize: number;
    constructor(private globalService: GlobalService,
        private globals: Globals) {
        this.globalService.getRequest("../../assets/runtimeVariables.json")
            .subscribe(data => this.getFileSize(data),
            error => this.dynamicFileSize = undefined)
    }

    public get allowedFileSize(): number {
        return this.dynamicFileSize || this.globals.defautAllowedFileSize;
    }
    public get allowedFileSizeString(): string {
        debugger;
        if (this.allowedFileSize !== undefined) {
            let sizeInMb = (this.allowedFileSize / 1000000);
            return `${sizeInMb} MB`;
        }
    }
    public dummyVal():Array<any>{
        let benefitPeriodFilters = [
            {
              "name": "2017",
              "selected":true
            }
          ];
        return benefitPeriodFilters;
    }
    public uploadExcel(excelFile: File): Observable<any> {
        let data = new FormData();
        data.append("file",excelFile);
        return this.globalService.uploadExcel(this.globals.manualSpeedLoadUrl,
            data)
    }
    public getFileSize(data: any) {
        let fileSize = +data.manualSpeedLoadFileSize;
        this.dynamicFileSize = isNaN(fileSize) ? undefined : fileSize;
    }
}