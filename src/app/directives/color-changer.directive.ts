import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appColorChanger]'
})
export class ColorChangerDirective implements OnInit {

  @Input('color') colorChanger: string

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.color = this.colorChanger
    console.log(this.colorChanger)
  }

}
