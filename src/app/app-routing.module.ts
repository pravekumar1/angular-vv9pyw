import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "recipes", loadChildren: './recipes/recipes.module#RecipesModule' },
  { path: "shopping-list", loadChildren: './shopping-list/shopping.module#ShoppingModule' },
  // { path: "login", loadChildren: './auth/auth.module#AuthModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
