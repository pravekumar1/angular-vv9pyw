import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesDetailsComponent } from "./recipes-details/recipes-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./recipes-resolver.service";
// import { AuthGuardService } from "./auth/auth-guard.service";

const routes: Routes = [
  {
    path: "",
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
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
