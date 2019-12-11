import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { Recipes } from "../recipes.model";
import { RecipeServiceService } from "../recipe-service.service";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  // @Output() singleRecipeSelected = new EventEmitter<Recipes>();
  recipes: Recipes[];
  constructor(private recipeService: RecipeServiceService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeItemSelected(singleRecipe: Recipes) {
  //   this.singleRecipeSelected.emit(singleRecipe);
  // }
}
