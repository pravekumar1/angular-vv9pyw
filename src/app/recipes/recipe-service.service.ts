import { Injectable, EventEmitter } from "@angular/core";

import { Recipes } from "./recipes.model";
import { Ingradients } from "../shared/ingradients.model";

@Injectable()
export class RecipeServiceService {
  private recipesList: Recipes[] = [
    new Recipes(
      "A test Recipe",
      "This is a description part",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg",
      [
        new Ingradients("Apple", 100),
        new Ingradients("Oranges", 10),
        new Ingradients("Banana", 60)
      ]
    ),
    new Recipes(
      "A test Recipe",
      "This is a description part",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg",
      [
        new Ingradients("Apple", 15),
        new Ingradients("Oranges", 20),
        new Ingradients("Banana", 10)
      ]
    )
  ];

  receipeSelected = new EventEmitter<Recipes>();

  constructor() {}

  getRecipes() {
    return this.recipesList.slice();
  }
}
