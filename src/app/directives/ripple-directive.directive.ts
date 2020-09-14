import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRippleDirective]'
})
export class RippleDirectiveDirective {

  @Input() public appRipple = 'ripple' ;


  constructor(public element: ElementRef, public renderer: Renderer2) { }

  // tslint:disable-next-line: typedef
  @HostListener('mouseenter') onHover() {
    this.renderer.addClass(this.element.nativeElement, this.appRipple);
  }

}
