import { IngredientEffects } from "./ingredient.effects";
import { ingredientReducer, IngredientState } from "./ingredient.reducer";

export interface AppState { ingredients: IngredientState; }

export const reducers = { ingredients: ingredientReducer };

export const effects = [IngredientEffects];