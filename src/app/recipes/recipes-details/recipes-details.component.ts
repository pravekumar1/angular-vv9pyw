import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipes } from "../recipes.model";
import { RecipeServiceService } from "../recipe-service.service";

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  recipeDetails: Recipes;
  id: number;
  constructor(private recipeService: RecipeServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => { 
      this.id = +params['id'];
      this.recipeDetails = this.recipeService.getRecipe(this.id);
    })
  }

// onShoppingListAdded() {
//   this.recipeService.addToShoppingList(this.recipeDetails.ingradients);
// }


}