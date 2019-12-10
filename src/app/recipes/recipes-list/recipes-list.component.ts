import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { Recipes } from "../recipes.model";
import { RecipeServiceService } from "../recipe-service.service";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  @Output() singleRecipeSelected = new EventEmitter<Recipes>();
  recipesList: Recipes[] = [
    new Recipes(
      "A test Recipe",
      "This is a description part",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg"
    ),
    new Recipes(
      "A second Recipe",
      "This is a second description part",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1472483520-springtacos-1572537127.jpg?crop=1.00xw:0.672xh;0,0.156xh&resize=640:*"
    )
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeItemSelected(singleRecipe: Recipes) {
    this.singleRecipeSelected.emit(singleRecipe);
  }
}
