import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipesListComponent } from "./recipes/recipes-list/recipes-list.component";
import { RecipesDetailsComponent } from "./recipes/recipes-details/recipes-details.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { HeaderComponent } from "./header/header.component";
import { RecipesItemComponent } from "./recipes/recipes-list/recipes-item/recipes-item.component";
import {HighlightDirective} from './directives/highlight.directive';
import { RendererDirective } from './directives/renderer.directive';
import { UnlessDirective } from './directives/unless.directive';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { RecipeServiceService } from './recipes/recipe-service.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    RecipesItemComponent,
    HighlightDirective,
    RendererDirective,
    UnlessDirective,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  bootstrap: [AppComponent],
  providers: [RecipeServiceService, ShoppingListService]
})
export class AppModule {}
