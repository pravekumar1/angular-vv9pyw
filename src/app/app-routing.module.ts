import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesDetailsComponent } from "./recipes/recipes-details/recipes-details.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipesComponent,
    // canActivate: [AuthGuardService],
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new-recipe", component: RecipeEditComponent },
      {
        path: ":id",
        component: RecipesDetailsComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ":id/edit-recipe",
        component: RecipeEditComponent,
        resolve: [RecipesResolverService]
      }
    ]
  },
  { path: "shopping-list", component: ShoppingListComponent },
  { path: "login", component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
