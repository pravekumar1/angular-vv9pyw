import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { Ingradients } from "../shared/ingradients.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingradients: Ingradients[] = [
  //   new Ingradients('Apple', 100),
  //    new Ingradients('Oranges',10),
  //     new Ingradients('Banana', 60)
  // ];
  ingradients: Ingradients[];
  private isChangedSub: Subscription;
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingradients = this.slService.getIngredients();

    this.isChangedSub = this.slService.ingradientsChanged.subscribe(
      (ingradient: Ingradients[]) => {
        this.ingradients = ingradient;
      }
    );
  }

  // onIngredientsAdded(ingredients: Ingradients) {
  //   this.ingradients.push(ingredients);
  // }

  onEditItem(index: number) {
    this.slService.startEditingValue.next(index);
  }

  ngOnDestroy(): void {
    this.isChangedSub.unsubscribe();
  }
}
