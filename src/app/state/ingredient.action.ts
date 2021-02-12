import { createAction, props } from "@ngrx/store";
import { Ingredient } from "../model/ingredient";

export const retrieveIngredients = createAction('[List Ingredients] - Load Ingredients', props<{ Ingredient }>());

//export const addIngredient = createAction('[List Ingredients] - Add Ingredient', props<{ Ingredient }>());