import { NgModule } from '@angular/core';
import {AuthenticationService,
    AuthGuard,
    GlobalService,
    GlobalErrorHandlerService,
    UtilsService} from './'
 import { Optional, SkipSelf } from '@angular/core';

@NgModule({
    providers : [AuthenticationService, AuthGuard,
        GlobalService, GlobalErrorHandlerService, UtilsService
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() core : CoreModule) {
        if (core) {
            throw new Error('Cannot import CoreModule here. CoreModule can only be imported in AppModule');
        }
    }
}