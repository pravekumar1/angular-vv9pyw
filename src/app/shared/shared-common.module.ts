import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { DropdownDirective } from "./directives/dropdown.directive";
import { AlertComponent } from "./alert/alert.component";

@NgModule({
  declarations: [DropdownDirective, LoadingSpinnerComponent, AlertComponent],
  imports: [CommonModule],
  exports: [DropdownDirective, LoadingSpinnerComponent, AlertComponent],

})
export class SharedCommonModule {}
