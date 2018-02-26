import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { GlobalErrorHandlerService } from '@app/core';
import { Observable, Subscription } from 'rxjs'
import { HttpResponseError } from '@app/core';


@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public subscription: Subscription
  constructor(public toastr: ToastsManager, public viewContainerRef: ViewContainerRef,
    public globalErrorHandlerService: GlobalErrorHandlerService) { }

  ngOnInit() {
    this.toastr.setRootViewContainerRef(this.viewContainerRef);
    this.subscription = this.globalErrorHandlerService.getDisplayErrorSubject().subscribe(error => this.showError(error));
  }
  showError(error: HttpResponseError) {
    this.toastr.error(error.errorMessage, error.errorDescription);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
