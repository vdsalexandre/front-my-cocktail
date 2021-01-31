import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingredient } from './ingredient';
import { Urls } from './mycocktail-url';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }

  private title: string = 'front-my-cocktail';
  alcools: Ingredient[];
  softs: Ingredient[];
  autres: Ingredient[];

  ngOnInit() {
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


  private findAllIngredientsByType(type: string): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(Urls.FIND_ALL_INGREDIENTS_BY_TYPE_URL + type).pipe(
      tap(_ => console.log(`findAllIngredientsByType: result [ ok ]`)),
      catchError(this.handleError<Ingredient[]>('findAllIngredientsByType', []))
    );
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
