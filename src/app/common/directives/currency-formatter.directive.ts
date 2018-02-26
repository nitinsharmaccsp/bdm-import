import { CurrencyPipeModule } from './../modules/currency-pipe/currency-pipe.module';
import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appCurrencyFormatter]'
})
export class CurrencyFormatterDirective {
  private element: any;
  
    constructor(
      private elementRef: ElementRef,
      private currencyPipe: CurrencyPipeModule
    ) {
      this.element = this.elementRef.nativeElement;
    }
  
    ngOnInit() {
      this.element.value = this.currencyPipe.transform(this.element.value);
    }
  
    // @HostListener("focus", ["$event.target.value"])
    // onFocus(value) {
    //   this.el.value = this.currencyPipe.parse(value); // opossite of transform
    // }
  
    @HostListener("blur", ["$event.target.value"])
    onBlur(value) {
      this.element.value = this.currencyPipe.transform(value);
    }
}
