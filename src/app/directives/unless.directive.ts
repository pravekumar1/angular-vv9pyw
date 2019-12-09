import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]"
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.veiwRef.createEmbeddedView(this.tempRef);
    } else {
      this.veiwRef.clear();
    }
  }

  constructor(
    private tempRef: TemplateRef<any>,
    private veiwRef: ViewContainerRef
  ) {}
}
