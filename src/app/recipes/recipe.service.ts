import { Injectable} from "@angular/core";

import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Christmas pudding',
  //     'Gluten-free Christmas pudding',
  //     'https://images.immediate.co.uk/production/volatile/sites/30/2017/11/stir-up-Christmas-pudding-c326564.jpg?quality=90&webp=true&resize=375,341',
  //  [
  //    new Ingredient('Raisins', 100),
  //    new Ingredient('Brandy', 50),
  //    new Ingredient('Flaked almonds', 50),
  //    new Ingredient('Gluten-free baking powder', 1),
  //
  //  ] ),
  //   new Recipe(
  //     'Сhicken breasts',
  //     'Air fryer chicken breasts',
  //     'https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Airfryer-hero-image-2a442a6.jpg?quality=90&webp=true&resize=375,341',
  //     [
  //       new Ingredient ('Chicken breasts', 4),
  //       new Ingredient ('Smoked sweet paprika', 1),
  //       new Ingredient ('Mixed herbs', 2),
  //       new Ingredient ('Pepper', 10),
  //     ])
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

    deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
    }

}

