import {createAction, props} from "@ngrx/store";
import {Ingredient} from "../models/ingredient";

export const loadIngredientsByType =
  createAction('[loadIngredientsByType] Load ingredients by type', props<{ ingredientType: string }>());

export const ingredientsByTypeLoaded =
  createAction('[ingredientsByTypeLoaded] Load ingredients by type done', props<{ ingredients: Ingredient[] }>());
