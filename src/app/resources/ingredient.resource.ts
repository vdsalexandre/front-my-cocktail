import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Ingredient} from "../models/ingredient";
import {Urls} from "./mycocktail-url";

@Injectable({
    providedIn: 'root'
})
export class IngredientResource {
    constructor(private http: HttpClient) { }

    public getAllIngredientsByType(type: string): Observable<Ingredient[]> {
      return this.http.get<Ingredient[]>(`${Urls.FIND_ALL_INGREDIENTS_BY_TYPE}/${type}`);
    }
}
