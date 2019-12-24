import { Component, OnInit, EventEmitter, Output, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from 'rxjs';

import { Recipes } from "../recipes.model";
import { RecipeServiceService } from "../recipe-service.service";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit, OnDestroy {
  // @Output() singleRecipeSelected = new EventEmitter<Recipes>();
  recipes: Recipes[];
  recipeChanged: Subscription
  constructor(
    private recipeService: RecipeServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipeChanged = this.recipeService.recipesChanged.subscribe((recipe: Recipes[]) => {
      this.recipes = recipe;
    } )
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(["new-recipe"], { relativeTo: this.route });
  }

  // onRecipeItemSelected(singleRecipe: Recipes) {
  //   this.singleRecipeSelected.emit(singleRecipe);
  // }

  ngOnDestroy(): void {
    this.recipeChanged.unsubscribe()
  }
}
