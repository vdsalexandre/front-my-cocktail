import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { IngredientResource } from "../resources/ingredient.resource";
import { AppState } from "./app.state";
import { alcoolsLoaded, loadIngredients } from "./ingredient.action";

@Injectable()
export class IngredientEffects {
    constructor(private readonly actions$: Actions, 
                private readonly store$: Store<AppState>,
                private readonly ingredientResource: IngredientResource) { }

    loadAlcools$ = createEffect(() => this.actions$.pipe(
        ofType(loadIngredients),
        mergeMap(() => this.ingredientResource.getIngredientsByType('alcool')),
        tap(() => console.log('Loading alcools ...')),
        map(alcools => alcoolsLoaded({alcools}))
    ));
}