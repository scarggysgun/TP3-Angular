import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBold]',
})
export class CustomDirDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.fontWeight = 'bold';
    this.el.nativeElement.style.color = 'green';
    this.el.nativeElement.style.textAlign = 'center';
  }
}
