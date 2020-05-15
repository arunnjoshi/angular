import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      "kheer",
      "sweet",
      "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2013/10/rice-kheer-2.jpg"
    ),
    new Recipe(
      "Another Kheer",
      "Another sweet",
      "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2013/10/rice-kheer-2.jpg"
    ),
  ];

  recipeSelect = new EventEmitter<Recipe>();

  getRecipe() {
    return this.recipes.slice();
  }
}
