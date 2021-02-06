import { Ingredient } from "./ingredient";

export interface Cocktail {
    idCocktail: number;
    nomCocktail: string;
    recetteCocktail: string;
    ingredients: Ingredient[]
}