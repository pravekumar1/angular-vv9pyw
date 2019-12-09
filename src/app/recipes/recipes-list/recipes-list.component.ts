import { Component, OnInit } from '@angular/core';

import {Recipes} from '../recipes.model';
import {RecipeServiceService} from '../recipe-service.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}