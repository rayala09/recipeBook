import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private recipes: Recipe[] = [
    {
      name: 'A new recipe',
      description: 'test recipe',
      imagepath: 'https://memphisgrills.com/wp-content/uploads/2016/09/Korean-Tacos.jpg',
      ingredients: [
        {
          name: 'Meat',
          amount: 1

        },
        new Ingredient('Tomatoes', 5)
      ]
    },
    new Recipe ( 'a test recipe', 'this is a sample test.', 'https://memphisgrills.com/wp-content/uploads/2016/09/Korean-Tacos.jpg',
  [
    new Ingredient('Meat',1),
    new Ingredient('Coconut Milk',1)

  ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(): Recipe [] {
    return this.recipes.slice(); // return exact copy of original array
  }

}
