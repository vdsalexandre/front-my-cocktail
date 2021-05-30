import {Ingredient} from "../models/ingredient";

export interface IngredientState {
  alcools: Ingredient[];
  softs: Ingredient[];
  autres: Ingredient[];
  ingredientsSelected: Ingredient[];
}
