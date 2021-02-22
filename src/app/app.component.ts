import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingredient } from './model/ingredient';
import { Urls } from './mycocktail-url';
import { catchError, tap } from 'rxjs/operators';
import { Response } from './Response';
import { Store } from '@ngrx/store';
import { IngredientResource } from './resources/ingredient.resource';
import { state } from '@angular/animations';
import { ServerStatus } from './resources/server-status.resource';
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
              private store: Store,
              private ingredientResource: IngredientResource,
              private serverResource: ServerStatus) { }

  private title: string = 'front-my-cocktail';
  alcools: Ingredient[];
  softs: Ingredient[];
  autres: Ingredient[];
  serverStatus: Response;
  // selectedIngredients: number[] = [];
  // selectedNames: string[] = [];

  ngOnInit() {
    this.serverResource.getServerStatus().subscribe(status => {
      this.checkServerStatus(status)
    }, this.onServerUnavailable);
  }

  ngAfterViewInit() {
    $(function() {
      $('.collapsible').collapsible();
      $('.dropdown-trigger').dropdown();
    });
  }

  checkServerStatus(status: Response) {
    if (status.httpCode === 200) {
      this.ingredientResource.getIngredientsByType('alcool').subscribe(alcools => this.alcools = alcools);
      this.ingredientResource.getIngredientsByType('soft').subscribe(softs => this.softs = softs);
      this.ingredientResource.getIngredientsByType('autre').subscribe(autres => this.autres = autres);
    }
  }

  onServerUnavailable() {
    alert('Error - server is not responding ...');
  }

  toggleIngredient(event: any) {    
    const id = event.target.attributes.id.value;
    const name: string = event.target.innerText;
    // this.store.dispatch(ingredientAdded({IngredientState(id, name, 'alcool', [])}));
    const isSelected: boolean = event.target.classList.contains('selected');
    
    if (!isSelected) {
      // this.selectedIngredients.push(id);
      // this.selectedNames.push(name);
      this.renderer.addClass(event.target, 'selected');
      // this.updateIngredientsText();
    }
    else {
      // const index = this.selectedIngredients.indexOf(id);
      // if (index > -1) {
      //   this.selectedIngredients.splice(index, 1);
      //   this.selectedNames.splice(index, 1);
      //   this.updateIngredientsText();
      // }
      this.renderer.removeClass(event.target, 'selected');
    }
  }

  // private updateIngredientsText() {
  //   let ingredients = '';
  //   this.selectedNames.forEach(ingredientName => {
  //     ingredients += ingredientName + ', ';
  //   });

  //   $('.p-list-ingredient').text(ingredients.substr(0, ingredients.length - 2));
  // }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      alert(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
