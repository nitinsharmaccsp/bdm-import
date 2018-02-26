import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
    public isJSON(stringValue : string) {
        try {
            return (JSON.parse(stringValue) && !!stringValue);
        } catch (e) {
            return false;
        }
    }
}