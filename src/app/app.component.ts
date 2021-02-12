import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingredient } from './model/ingredient';
import { Urls } from './mycocktail-url';
import { catchError, tap } from 'rxjs/operators';
import { Response } from './Response';
import { Store } from '@ngrx/store';
//import { addIngredient } from './state/ingredient.action';

declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, 
              private renderer: Renderer2,
              private store: Store) { }

  private title: string = 'front-my-cocktail';
  alcools: Ingredient[];
  softs: Ingredient[];
  autres: Ingredient[];
  serverResponse: Response;
  selectedIngredients: number[] = [];
  selectedNames: string[] = [];

  ngOnInit() {
    this.isServerListening().subscribe(response => {
      if (response.httpCode === 200) {
        this.findAllIngredientsByType('alcool').subscribe(alcools => { 
          this.alcools = alcools;
        });
        this.findAllIngredientsByType('soft').subscribe(softs => { 
          this.softs = softs;
        });
        this.findAllIngredientsByType('autre').subscribe(autres => { 
          this.autres = autres;
        });
      }
    })
  }

  ngAfterViewInit() {
    $(function() {
      $('.collapsible').collapsible();
      $('.dropdown-trigger').dropdown();
    });
  }

  toggleIngredient(event: any) {    
    const id = event.target.attributes.id.value;
    const name: string = event.target.innerText;
    // this.store.dispatch(ingredientAdded({IngredientState(id, name, 'alcool', [])}));
    const isSelected: boolean = event.target.classList.contains('selected');
    
    if (!isSelected) {
      this.selectedIngredients.push(id);
      this.selectedNames.push(name);
      this.renderer.addClass(event.target, 'selected');
      this.updateIngredientsText();
    }
    else {
      const index = this.selectedIngredients.indexOf(id);
      if (index > -1) {
        this.selectedIngredients.splice(index, 1);
        this.selectedNames.splice(index, 1);
        this.updateIngredientsText();
      }
      this.renderer.removeClass(event.target, 'selected');
    }
  }

  private updateIngredientsText() {
    let ingredients = '';
    this.selectedNames.forEach(ingredientName => {
      ingredients += ingredientName + ', ';
    });

    $('.p-list-ingredient').text(ingredients.substr(0, ingredients.length - 2));
  }

  private isServerListening(): Observable<Response> {
    return this.http.get<Response>(Urls.CHECK_SERVER_STATUS_URL).pipe(
      tap(response => console.log(`httpCode: ${response.httpCode} - ${response.message}`)),
      catchError(this.handleError<Response>('isServerListening()'))
    );
  }

  private findAllIngredientsByType(type: string): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(Urls.FIND_ALL_INGREDIENTS_BY_TYPE_URL + type).pipe(
      tap(_ => console.log(`findAllIngredientsByType(${type}): result [ ok ]`)),
      catchError(this.handleError<Ingredient[]>('findAllIngredientsByType', []))
    );
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      alert(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
