import { createAction, props } from "@ngrx/store";

export const addIngredient = createAction(
    '[Ingredient List] - Add Ingredient',
    props<{ ingredientId }>()
);