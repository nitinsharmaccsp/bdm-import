import { ErrorComponent } from './common/components/error/error.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,PreloadAllModules} from '@angular/router';
import { CoreModule } from './core/core.module';
import { NgAutoCompleteModule } from "ng-auto-complete";
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { MemberAccumsInquiryComponent } from './member-accums-inquiry/member-accums-inquiry.component';
import { MemberAccumsSearchComponent } from './member-accums-search/member-accums-search.component';
import { ROUTES } from './app.routes';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MemberUtilizationCollapseComponent } from './member-utilization-collapse/member-utilization-collapse.component';
import { ManualSpeedLoadComponent } from './manual-speed-load/manual-speed-load.component';


import { AutoCompleteComponent, InputComponent,
  ModalComponent, PaginationComponent, DatepickerComponent,
  NavbarComponent, CurrencyFormatterDirective, DirectivecontainerComponent,
  UtilizationTableComponent, TableDropdownComponent, Globals
} from './common';

@NgModule({
  declarations: [
    AppComponent,
    MemberUtilizationCollapseComponent,
    LandingPageComponent,
    HeaderComponent,
    TabsComponent,
    MemberAccumsInquiryComponent,
    MemberAccumsSearchComponent,
    PaginationComponent,
    ModalComponent,
    DatepickerComponent,
    UtilizationTableComponent,
    CurrencyFormatterDirective,
    InputComponent,
    AutoCompleteComponent,
    NavbarComponent,
    DirectivecontainerComponent,
    SearchResultsComponent,
    TableDropdownComponent,
    ManualSpeedLoadComponent,
    ErrorComponent
  ],
  imports: [
    CoreModule,
    NgAutoCompleteModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES,{ useHash: true, preloadingStrategy: PreloadAllModules }),
    ToastModule.forRoot(),
    NoopAnimationsModule
  ],
  providers: [ Globals ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
