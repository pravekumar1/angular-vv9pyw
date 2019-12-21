import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

import { Ingradients } from "../shared/ingradients.model";
@Injectable()
export class ShoppingListService {
  ingradientsChanged = new Subject<Ingradients[]>();
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
    this.ingradientsChanged.next(this.ingradients.slice());   
  }

  addRecipeIngredients(ingradient: Ingradients[]) {
    this.ingradients.push(...ingradient);
    this.ingradientsChanged.next(this.ingradients.slice());   

  }
}
