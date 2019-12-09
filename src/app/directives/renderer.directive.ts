import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appRenderer]"
})
export class RendererDirective implements OnInit {
  @Input() defualtColor: string = "transparent";
  @Input() highLightedColor: string = "blue";
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  elementRequired = this.elementRef.nativeElement;
  ngOnInit() {
    this.backgroundColor = this.defualtColor;
    // this.renderer.setStyle(elementRequired, 'backgroundColor', 'blue');
  }

  @HostBinding("style.backgroundColor") backgroundColor: string;

  @HostListener("mouseenter") mouseover() {
    // this.renderer.setStyle(this.elementRequired, "backgroundColor", "blue");
    this.backgroundColor = this.highLightedColor;
  }
  @HostListener("mouseleave") mouseleave() {
    // this.renderer.setStyle(this.elementRequired, "backgroundColor", "transparent");
    this.backgroundColor = this.defualtColor;;
  }
}
