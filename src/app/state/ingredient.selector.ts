import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { IngredientState } from "./ingredient.reducer";

export const selectedIngredientState: (appState: AppState) => IngredientState = 
(appState: AppState) => appState.ingredients;

export const getSelectedIngredients = createSelector(
    selectedIngredientState,
    (ingredientState: IngredientState) => ingredientState.ingredients
);