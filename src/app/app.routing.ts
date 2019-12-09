import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';

import { FilmDetailComponent } from './films/film-detail/film-detail.component';
import { FilmNotFindComponent } from './films/film-not-find/film-not-find.component';

//CREATE ROUTES - FROM APLICATION

const appRoutes : Routes = [   
    { path: 'films', component: FilmsComponent},
    { path: 'film/:id', component: FilmDetailComponent},
    { path: 'login', component: LoginComponent},
    { path: 'notFound', component: FilmNotFindComponent},
    { path: '', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
