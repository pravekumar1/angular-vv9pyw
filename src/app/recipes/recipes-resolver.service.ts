import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {DataStorageService} from '../shared/data-storage.service';
import {Recipes} from './recipes.model';
import { RecipeServiceService } from './recipe-service.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipes[]> {

  constructor(private datasourceService: DataStorageService, private recipeService: RecipeServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();
    if(recipes.length === 0) {
    return this.datasourceService.fetchRecipes();
    } else {
     return recipes; 
    }
  }

}