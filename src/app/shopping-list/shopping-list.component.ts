import { Component, OnInit } from '@angular/core';

import {Ingradients} from '../shared/ingradients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingradients: Ingradients[] = [
    new Ingradients('Apple', 100),
     new Ingradients('Oranges',10),
      new Ingradients('Banana', 60)
  ]
  constructor() { }

  ngOnInit() {
  }

}