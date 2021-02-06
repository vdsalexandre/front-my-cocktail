import { Cocktail } from "./cocktail";

export interface Ingredient {
    idIngredient: number;
    nomIngredient: string;
    typeIngredient: string;
    cocktails: Cocktail[];
}