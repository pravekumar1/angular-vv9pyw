import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

import { Recipes } from "./recipes.model";
import { Ingradients } from "../shared/ingradients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeServiceService {
  recipesChanged = new Subject<Recipes[]>();
  private recipesList: Recipes[] = [
    // new Recipes(
    //   "A test Recipe",
    //   "This is a description part",
    //   "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg",
    //   [
    //     new Ingradients("Apple", 100),
    //     new Ingradients("Oranges", 10),
    //     new Ingradients("Banana", 60)
    //   ]
    // ),
    // new Recipes(
    //   "A Second Recipe value",
    //   "This is a second description part",
    //   "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/epic-summer-salad.jpg",
    //   [
    //     new Ingradients("Apple", 15),
    //     new Ingradients("Oranges", 20),
    //     new Ingradients("Banana", 10)
    //   ]
    // )
  ];

  // receipeSelected = new Subject<Recipes>();

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipes[]) {
    this.recipesList = recipes;
    this.recipesChanged.next(this.recipesList.slice());
  }
  getRecipes() {
    return this.recipesList.slice();
  }

  getRecipe(index: number) {
    return this.recipesList[index];
  }

  addToShoppingList(ingradient: Ingradients[]) {
    this.slService.addRecipeIngredients(ingradient);
  }

  addRecipe(recipe: Recipes) {
    this.recipesList.push(recipe);
    this.recipesChanged.next(this.recipesList.slice());
  }

  updateRecipe(index: number, newRecipe) {
    this.recipesList[index] = newRecipe;
    this.recipesChanged.next(this.recipesList.slice());
  }

  deleteRecipe(index: number) {
    this.recipesList.splice(index, 1);
    this.recipesChanged.next(this.recipesList.slice());
  }
}
