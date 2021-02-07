import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectIngredients = createSelector(
    (state: AppState) => state.ingredients,
    (ingredientId: Array<number>) => ingredientId
);