import {Action, createReducer, on} from "@ngrx/store";
import {ingredientsByTypeLoaded} from "./ingredient.action";
import {IngredientState} from "./ingredient.state";

export const initialState: IngredientState = {
  alcools: [],
  softs: [],
  autres: [],
  ingredientsSelected: []
}

const onIngredientsByTypeLoaded = (state, ingredients) => ({
  ...state,
  alcools: ingredients.alcools
})

const IngredientReducer = createReducer(
  initialState,
  on(ingredientsByTypeLoaded, onIngredientsByTypeLoaded)
);

export function ingredientReducer(state: IngredientState | undefined, action: Action) {
  return IngredientReducer(state, action);
}
