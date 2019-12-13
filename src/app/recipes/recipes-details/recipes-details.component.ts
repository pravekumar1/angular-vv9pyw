import { Component, OnInit, Input } from '@angular/core';

import { Recipes } from "../recipes.model";
import { RecipeServiceService } from "../recipe-service.service";

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  @Input() recipeDetails: Recipes;
  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit() {
  }

onShoppingListAdded() {
  this.recipeService.addToShoppingList(this.recipeDetails.ingradients);
}
}