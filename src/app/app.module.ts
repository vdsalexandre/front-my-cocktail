import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';
import { StoreModule } from '@ngrx/store';
import { ingredientReducer } from './state/ingredient.reducer';
import { EffectsModule } from '@ngrx/effects';
import { IngredientEffects } from './state/ingredient.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideMenuComponent,
    SearchMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ingredients: ingredientReducer}),
    EffectsModule.forRoot([IngredientEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
