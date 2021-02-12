import { Action, createReducer, on } from "@ngrx/store";
import { Ingredient } from "../model/ingredient";
import { retrieveIngredients } from "./ingredient.action";

export type IngredientState = {
    ingredients: Ingredient[]
};

export const initialState: IngredientState = {
    ingredients: []
};

const onRetrieveIngredients = (state, { Ingredient }) => [...Ingredient];

//const onIngredientAdded = (state, {ingredient}) => ({...state, ingredient});

export const ingredientReducer = createReducer(
    initialState,
    on(retrieveIngredients, onRetrieveIngredients)
//    on(addIngredient, onIngredientAdded)
);

export function reducer(state: Ingredient | undefined, action: Action): IngredientState {
    return ingredientReducer(state, action);
}