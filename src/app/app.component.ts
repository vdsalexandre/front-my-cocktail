import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingredient } from './ingredient';
import { Urls } from './mycocktail-url';
import { catchError, map, tap } from 'rxjs/operators';
import { Response } from './Response';

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
  serverResponse: Response;

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

  private isServerListening(): Observable<Response> {
    return this.http.get<Response>(Urls.CHECK_SERVER_STATUS_URL).pipe(
      tap(response => console.log(`${response.httpCode} - ${response.message}`)),
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
