import { Component, OnInit } from "@angular/core";

import { Recipes } from "../recipes.model";
import { RecipeServiceService } from "./recipe-service.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  selectedSingleRecipe: Recipes;
  constructor(private recipeService: RecipeServiceService) {}

  ngOnInit() {
    this.recipeService.receipeSelected.subscribe((recipe: Recipes) => {
      this.selectedSingleRecipe = recipe;
    });
  }
}
