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
import { HeroFormComponent } from './component/hero-form/hero-form.component';
import { GenderPipePipe } from './pipes/gender-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './screen/book-list/book-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroUnitComponent,
    DrinkComponent,
    HomeComponent,
    PageNotFoundComponent,
    CategoriesComponent,
    HeroFormComponent,
    HttpClientModule,
    GenderPipePipe,
    BookListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }