import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CurrencyPipeModule implements PipeTransform{
  private PREFIX: string
  private DECIMAL_SEPARATOR: string;
  private THOUSANDS_SEPARATOR: string;
  private SUFFIX: string
  
  constructor() {
    // TODO comes from configuration settings
    this.PREFIX = ''
    this.THOUSANDS_SEPARATOR = ",";
   
  }

  transform(value: string, fractionSize: number = 2): string {
    let [integer] = (value || "").toString()
      .split(".");

   
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);

  return this.PREFIX + integer  ;
  }
 }
