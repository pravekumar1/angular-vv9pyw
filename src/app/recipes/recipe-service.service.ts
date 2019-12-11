import { Injectable, EventEmitter } from '@angular/core';

import {Recipes} from './recipes.model';

@Injectable()
export class RecipeServiceService {
  private recipesList: Recipes[] = [
    new Recipes('A test Recipe', 'This is a description part', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg'),
     new Recipes('A test Recipe', 'This is a description part', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg'),
  ];

  receipeSelected = new EventEmitter<Recipes>();

  constructor() { }

  getRecipes() {
    return this.recipesList.slice();
  }
}