import { Injectable, EventEmitter } from "@angular/core";

import { Ingradients } from "../shared/ingradients.model";
@Injectable()
export class ShoppingListService {
  ingradientsChanged = new EventEmitter<Ingradients[]>();
  private ingradients: Ingradients[] = [
    new Ingradients("Apple", 100),
    new Ingradients("Oranges", 10),
    new Ingradients("Banana", 60)
  ];
  constructor() {}

  getIngredients() {
    return this.ingradients.slice();
  }

  addIngredients(ingradient: Ingradients) {
    this.ingradients.push(ingradient);
    this.ingradientsChanged.emit(this.ingradients.slice());   
  }

  addRecipeIngredients(ingradient: Ingradients[]) {
    this.ingradients.push(...ingradient);
    this.ingradientsChanged.emit(this.ingradients.slice());   

  }
}
