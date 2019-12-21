import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  constructor(private recipeService: RecipeServiceService, 
  private route: ActivatedRoute, 
  private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => { 
      this.id = +params['id'];
      this.recipeDetails = this.recipeService.getRecipe(this.id);
    })
  }

  onEditRecipe() {
    this.router.navigate(["edit-recipe"], { relativeTo: this.route });
  }

onShoppingListAdded() {
  this.recipeService.addToShoppingList(this.recipeDetails.ingradients);
}

}