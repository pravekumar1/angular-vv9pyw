import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { RendererDirective } from "./directives/renderer.directive";
import { UnlessDirective } from "./directives/unless.directive";
import {SharedCommonModule} from "./shared/shared-common.module";
import {CoreModule} from "./core.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedCommonModule,
    CoreModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightDirective,
    RendererDirective,
    UnlessDirective
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
