import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FilmsComponent } from './films/films.component';
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { FilmDetailComponent } from './films/film-detail/film-detail.component';
import { FilmsService } from './films/films.service';
import { FilmNotFindComponent } from './films/film-not-find/film-not-find.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FilmsComponent,
    FilmDetailComponent,
    FilmNotFindComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AppRoutingModule,
    routing
  ],
  providers: [
    FilmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
