import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
//import { FilmsModule } from './films/films.module';
//import { FilmFormsRoutingModule } from './film-forms/film-forms.routing.module';
//import { DetailComponent } from './film-forms/detail/detail.component';
//import { FormComponent } from './film-forms/form/form.component';
//import { FilmFormsComponent } from './film-forms/film-forms.component';
import { AuthService } from './login/auth.service';

import { AuthGuard } from './guards/auth-guard';
import { FilmsGuard } from './guards/films.guards';
import { FilmFormsGuard } from './guards/film-forms.guards';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    //FilmFormsComponent,
    //DetailComponent,
    //FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //FilmsModule, 
    //FilmFormsRoutingModule,
    AppRoutingModule,
    //routing
  ],
  providers: [
    AuthService,
    AuthGuard,
    FilmsGuard,
    FilmFormsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
