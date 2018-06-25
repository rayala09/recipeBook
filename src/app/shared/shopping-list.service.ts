import { Ingredient } from './ingredient.model';
import { EventEmitter } from '@angular/core';



export class ShoppingListService {
  private ingredients: Ingredient[] = [
    {
      name: 'Apple',
      amount: 5
    },
    new Ingredient('tomatoes', 10)
  ];

  ingredientChanged = new EventEmitter<Ingredient []>();

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  addIngredients(ingredients: Ingredient[]) {
    // VIABLE OPTION BUT IT CAUSES LOTS OF EVENTS BEING EMITTED
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients)
  }

}
