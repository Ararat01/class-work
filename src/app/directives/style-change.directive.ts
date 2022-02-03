import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyleChange]'
})
export class StyleChangeDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') hover() {
    this.el.nativeElement.style.fontSize = '20px'
    this.el.nativeElement.style.color = 'red'
    this.el.nativeElement.style.transition = '0.3s'
  }

  @HostListener('mouseleave') hoverLeave() {
    this.el.nativeElement.style.fontSize = ''
    this.el.nativeElement.style.color = ''
  }

}
