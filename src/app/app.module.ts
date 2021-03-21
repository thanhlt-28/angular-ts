import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './screen/hero-list/hero-list.component';
import { HeroUnitComponent } from './component/hero-unit/hero-unit.component';
import { DrinkComponent } from './drink/drink.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroUnitComponent,
    DrinkComponent,
    HomeComponent,
    PageNotFoundComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }