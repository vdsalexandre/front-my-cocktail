import { createSelector } from "@ngrx/store";
import { Ingredient } from "../model/ingredient";
import { AppState } from "./app.state";
import { IngredientState } from "./ingredient.reducer";

export const selectedIngredients = createSelector(
    (state: AppState) => state.ingredients,
    (ingredients: Ingredient[]) => ingredients
);

export const getSelectedIngredients = createSelector(
    selectedIngredients,
    (ingredientState: IngredientState) => ingredientState.ingredients
);