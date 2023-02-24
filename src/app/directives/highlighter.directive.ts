import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#18edff', 'black')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', 'white')
  }

  private highlight(backgroundColor: string, color: string) {
    this.el.nativeElement.style.backgroundColor = backgroundColor
    this.el.nativeElement.style.color = color
  }


}
