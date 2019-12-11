import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { Recipes } from "../../recipes.model";
import { RecipeServiceService } from "../../recipe-service.service";


@Component({
  selector: "app-recipes-item",
  templateUrl: "./recipes-item.component.html",
  styleUrls: ["./recipes-item.component.css"]
})
export class RecipesItemComponent implements OnInit {
  @Input() recipeItem: Recipes;
  // @Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipeServiceService) {}

  ngOnInit() {}

  onSlectedItem() {
    // this.recipeSelected.emit();
    this.recipeService.receipeSelected.emit(this.recipeItem);
  }
}
