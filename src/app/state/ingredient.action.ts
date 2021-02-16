import { createAction, props } from "@ngrx/store";
import { Ingredient } from "../model/ingredient";

//export const retrieveIngredients = createAction('[List Ingredients] - Retrieve Ingredients', props<{ ingredient: Ingredient[] }>());
export const loadIngredients = createAction('[List Ingredients] - Load Ingredients');
export const alcoolsLoaded = createAction('[List Ingredients] - Alcools loaded', props<{ alcools: Ingredient[] }>());