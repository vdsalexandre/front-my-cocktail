import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {IngredientResource} from "../resources/ingredient.resource";
import {ingredientsByTypeLoaded, loadIngredientsByType} from "./ingredient.action";
import {map, mergeMap} from "rxjs/operators";

@Injectable()
export class IngredientEffects {

  constructor(private actions$: Actions, private ingredientResource: IngredientResource) { }

  loadIngredientsByType$ = createEffect(() => this.actions$.pipe(
    ofType(loadIngredientsByType),
    mergeMap((action) => this.ingredientResource.getAllIngredientsByType(action.ingredientType)),
    map(ingredients => ingredientsByTypeLoaded({ingredients}))
  ));
}
