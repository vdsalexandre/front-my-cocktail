import { Action, createReducer, on } from "@ngrx/store";
import { Ingredient } from "../model/ingredient";
import { alcoolsLoaded } from "./ingredient.action";
//import { retrieveIngredients } from "./ingredient.action";

export type IngredientState = {
    alcools: Ingredient[],
    softs: Ingredient[],
    autres: Ingredient[]
};

export const initialState: IngredientState = {
    alcools: [],
    softs: [],
    autres: []
};

export const ingredientReducer = createReducer(
    initialState,
    on(alcoolsLoaded, (state, { alcools }) => ({ ...state, ingredients: alcools }))
);

export function reducer(state: IngredientState | undefined, action: Action) {
    return ingredientReducer(state, action);
}