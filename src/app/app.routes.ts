import { AuthGuard } from '@app/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MemberAccumsInquiryComponent } from './member-accums-inquiry/member-accums-inquiry.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ManualSpeedLoadComponent } from './manual-speed-load/manual-speed-load.component';

export const ROUTES: Routes = [
      {
        path : '',
        redirectTo : 'member-inquiry',
        pathMatch : 'full'
      },
      { 
        path:'member-inquiry',
        component: LandingPageComponent,
        children:[
          {
            path : '',
            redirectTo : 'manual-speed-load',
            pathMatch : 'full'
          },
          {
            path:'manual-speed-load',
            component: ManualSpeedLoadComponent
          }
          ,
          {
            path :'member-accums-inquiry',
            redirectTo : 'member-accums-inquiry',
            pathMatch : 'prefix'
          },
          {
            path:'member-accums-inquiry',
            component: MemberAccumsInquiryComponent
          }
        ]
      },
];
