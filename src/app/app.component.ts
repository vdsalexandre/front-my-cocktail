import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from './ingredient';
import { Urls } from './mycocktail-url';

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
    this.findAllIngredientsByType('alcool').subscribe(autres => { 
      this.autres = autres;
    });
  }


  findAllIngredientsByType(type: string): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(Urls.FIND_ALL_INGREDIENTS_BY_TYPE_URL + type);
  }
}
