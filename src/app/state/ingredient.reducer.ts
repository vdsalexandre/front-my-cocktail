import { createReducer, on } from "@ngrx/store";
import { Ingredient } from "../ingredient";
import { addIngredient } from "./ingredient.action";

export const initialState: ReadonlyArray<Ingredient> = [];

export const ingredientReducer = createReducer(
    initialState,
    on(addIngredient, (state, { ingredient }) => [...ingredient])
);