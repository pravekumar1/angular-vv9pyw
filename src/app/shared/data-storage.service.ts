import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

import {RecipeServiceService} from '../recipes/recipe-service.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeServiceService ) { }

  url: string = 'https://shopping-d26d8.firebaseio.com/';

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put(this.url + 'recipes.json', recipes)
    .subscribe((response) => {
      console.log(response);
    });

  }


  fetchRecipes() {
    return this.http.get(this.url + 'recipes.json')
    .pipe(map((recipes) => {
      return recipes.map(recipe => {
        return {
          ...recipe, 
          ingradients: recipe.ingradients ? recipe.ingradients : []
        };
      });
    })
    )
    .subscribe((recipes) => {
      console.log(recipes);
    });

  }

}