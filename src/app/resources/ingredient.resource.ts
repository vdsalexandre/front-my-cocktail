import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ingredient } from "../model/ingredient";
import { environment } from "./environment";

@Injectable({
    providedIn: 'root'
})
export class IngredientResource {
    private ingredientApi = `${environment.host}/ingredient`;

    constructor(private http: HttpClient) { }

    public getIngredientsByType(type: string): Observable<Ingredient[]> {
        return this.http.get<Ingredient[]>(`${this.ingredientApi}/all/${type}`);
    }
}