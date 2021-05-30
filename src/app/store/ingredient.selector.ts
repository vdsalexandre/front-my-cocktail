import {createSelector} from "@ngrx/store";
import {IngredientState} from "./ingredient.state";

export const selectAllIngredients: (ingredientState: IngredientState) => IngredientState =
  (ingredientState => ingredientState);

export const getSelectedIngredients = createSelector(
  selectAllIngredients,
  (ingredientState: IngredientState) => ingredientState.ingredientsSelected
);

export const getAlcools = createSelector(
  selectAllIngredients,
  (ingredientState: IngredientState) => ingredientState.alcools
);
