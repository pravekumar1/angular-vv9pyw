import { Component, OnInit } from '@angular/core';

import {Ingradients} from '../shared/ingradients.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingradients: Ingradients[] = [
  //   new Ingradients('Apple', 100),
  //    new Ingradients('Oranges',10),
  //     new Ingradients('Banana', 60)
  // ];
  ingradients: Ingradients[];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingradients = this.slService.getIngredients();
  }

  // onIngredientsAdded(ingredients: Ingradients) {
  //   this.ingradients.push(ingredients);
  // }

}