import { Ingredient } from "../ingredient";

export interface AppState {
    ingredients: ReadonlyArray<Ingredient>;
}