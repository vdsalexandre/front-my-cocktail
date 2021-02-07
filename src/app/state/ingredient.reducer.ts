import { createReducer, on } from "@ngrx/store";
import { addIngredient } from "./ingredient.action";

export const initialState: ReadonlyArray<number> = [];

export const ingredientReducer = createReducer(
    initialState,
    on(addIngredient, (state, { ingredientId }) => {
        if (state.indexOf(ingredientId) > -1)
            return state;

        return [...state, ingredientId];
    })
);