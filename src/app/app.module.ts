import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
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

@NgModule({
  imports: [BrowserModule, FormsModule],
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
    DropdownDirective
  ],
  bootstrap: [AppComponent],
  providers: [RecipeServiceService, ShoppingListService]
})
export class AppModule {}
