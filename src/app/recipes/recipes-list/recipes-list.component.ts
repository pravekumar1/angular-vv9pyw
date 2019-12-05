import { Component, OnInit } from '@angular/core';

import {Recipes} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipesList: Recipes[] = [
    new Recipes('A test Recipe', 'This is a description part', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg'),
     new Recipes('A test Recipe', 'This is a description part', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg'),
  ]
  constructor() { }

  ngOnInit() {
  }

}