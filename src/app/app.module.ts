import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { FilmsGuard } from './guards/films.guards';
import { FilmFormsGuard } from './guards/film-forms.guards';
import { DataService } from './home/data.service';
//import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    //HttpClient 
  ],
  providers: [
    AuthService,
    DataService,
    AuthGuard,
    FilmsGuard,
    FilmFormsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
