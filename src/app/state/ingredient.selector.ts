import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { Ingredient } from "../ingredient";
import { AppState } from "./app.state";

export const selectIngredients = createSelector(
    (state: AppState) => state.ingredients,
    (ingredients: Array<Ingredient>) => ingredients
);