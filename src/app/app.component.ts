import {Component, OnChanges, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {loadIngredientsByType} from "./store/ingredient.action";

declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  constructor(private store: Store) { }

  title: string = 'front-my-cocktail';

  ngOnChanges(): void {
    $(function() {
      $('.collapsible').collapsible();
      $('.dropdown-trigger').dropdown();
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadIngredientsByType({ingredientType: 'alcool'}));
  }
}
