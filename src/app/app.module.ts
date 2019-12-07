import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { FilmsModule } from './films/films.module';
import { FilmFormsRoutingModule } from './film-forms/film-forms.routing.module';
import { DetailComponent } from './film-forms/detail/detail.component';
import { FormComponent } from './film-forms/form/form.component';
import { FilmFormsComponent } from './film-forms/film-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmFormsComponent,
    DetailComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilmsModule, 
    FilmFormsRoutingModule,
    AppRoutingModule,
    routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
