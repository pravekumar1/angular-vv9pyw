import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipeServiceService } from "../recipe-service.service";
import { Recipes } from "../recipes.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeServiceService, private router: Router) { }

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
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
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
      // console.log(recipe['ingradients']);
      if(recipe['ingradients']) {
        for(let ingradient of recipe.ingradients) {
        recipeIngredients.push(
          new FormGroup({
         'name': new FormControl(ingradient.name, Validators.required),
         'amount': new FormControl(ingradient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImage, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingradients': recipeIngredients 
    });
  }

  onSaveRecipeForm() {
    const newRecipe = new Recipes(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingradients'],
    );
    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngradient(index: number){
    (<FormArray>this.recipeForm.get('ingradients')).removeAt(index);
  }

}