import { Cocktail } from "./cocktail";

export class Ingredient {
    idIngredient: number;
    nomIngredient: string;
    typeIngredient: string;
    cocktails: Cocktail[];
}