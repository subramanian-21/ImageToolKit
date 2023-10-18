import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective {

  constructor(private e:ElementRef,private renderer:Renderer2) { }
  @HostListener('focus') inc(){
    this.renderer.setStyle(this.e.nativeElement,"width","200px")
    this.renderer.addClass(this.e.nativeElement,'lengthIncrease')
    this.renderer.removeClass(this.e.nativeElement,'lengthDecrease')
  }
  @HostListener('blur') dec(){
    this.renderer.setStyle(this.e.nativeElement,'width','150px')
    this.renderer.addClass(this.e.nativeElement,'lengthDecrease')
    this.renderer.removeClass(this.e.nativeElement,'lengthIncrease')
  }

}
