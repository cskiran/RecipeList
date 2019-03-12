import {Ingredient} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('tomato',7)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }  

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredient: Ingredient[]){
        /* for(let ingredient of this.ingredients){
            this.addIngredient(ingredient);
        } */
        this.ingredients.push(...this.ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}