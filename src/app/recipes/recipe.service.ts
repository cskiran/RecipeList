import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Test Recipe','testing',
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.wellplated.com%2Fwp-content%2Fuploads%2F2017%2F12%2FHoppin-John-recipe-600x629.jpg&imgrefurl=https%3A%2F%2Fwww.wellplated.com%2Fhoppin-john-recipe%2F&docid=Az3joRwdjiBzoM&tbnid=ZUWPq8LVR5RurM%3A&vet=10ahUKEwjGp9fPsPngAhV57HMBHbkWDbAQMwiMASgUMBQ..i&w=600&h=629&bih=647&biw=663&q=recipe&ved=0ahUKEwjGp9fPsPngAhV57HMBHbkWDbAQMwiMASgUMBQ&iact=mrc&uact=8',
        [
            new Ingredient('Meat',1),
            new Ingredient('Fries',20)
        ])
      ];

  constructor(private slService:ShoppingListService){};

  getRecipes(){
      return this.recipes.slice();
  }  
  
  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}