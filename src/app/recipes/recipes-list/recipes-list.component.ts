import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

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
  constructor(
    private recipeService: RecipeServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(["new-recipe"], { relativeTo: this.route });
  }

  // onRecipeItemSelected(singleRecipe: Recipes) {
  //   this.singleRecipeSelected.emit(singleRecipe);
  // }
}
