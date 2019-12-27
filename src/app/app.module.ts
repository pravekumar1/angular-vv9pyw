import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { RendererDirective } from "./directives/renderer.directive";
import { UnlessDirective } from "./directives/unless.directive";
import { RecipeServiceService } from "./recipes/recipe-service.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { AuthComponent } from "./auth/auth.component";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { RecipesModule } from "./recipes/recipes.module";
import { ShoppingModule } from "./shopping-list/shopping.module";
import { AuthModule } from "./auth/auth.module";
import {SharedCommonModule} from "./shared/shared-common.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesModule,
    ShoppingModule,
    AuthModule,
    SharedCommonModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightDirective,
    RendererDirective,
    UnlessDirective,
    AuthComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    RecipeServiceService,
    ShoppingListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class AppModule {}
