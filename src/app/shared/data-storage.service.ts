import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, tap, take, exhaustMap } from "rxjs/operators";

import { Recipes } from "../recipes/recipes.model";
import { RecipeServiceService } from "../recipes/recipe-service.service";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeServiceService,
    private authService: AuthService
  ) {}

  url: string = "https://shopping-d26d8.firebaseio.com/";

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put(this.url + "recipes.json", recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        return this.http.get<Recipes[]>(this.url + "recipes.json", 
        {
          params: new HttpParams().set('auth', user.token)
        });
      }),
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingradients: recipe.ingradients ? recipe.ingradients : []
          };
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
