import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { RecipeServiceService } from "../recipe-service.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeServiceService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initializeForm();
    })
  }

  onAddIngradient() {
    (<FormArray>this.recipeForm.get('ingradients')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    )
  }
  private initializeForm() {
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImage = recipe.imagePath;
      recipeDescription = recipe.description;
      console.log(recipe['ingradients']);
      debugger;
      if(recipe['ingradients']) {
        for(let ingradient of recipe.ingradients) {
        recipeIngredients.push(
          new FormGroup({
         'name': new FormControl(ingradient.name),
         'amount': new FormControl(ingradient.amount)
          })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImage),
      'description': new FormControl(recipeDescription),
      'ingradients': recipeIngredients 
    });
  }



  onSaveRecipeForm() {
    console.log(this.recipeForm);
  }

}