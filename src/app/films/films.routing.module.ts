//JUST HAVE IMPORTS USED BY FILMS

import { NgModule } from '@angular/core';
import { Component, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsComponent } from './films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmNotFindComponent } from './film-not-find/film-not-find.component';

//CREATE ROUTES - FROM APLICATION

const filmsRoutes : Routes = [
    { path: 'films', component: FilmsComponent},
    { path: 'film/:id', component: FilmDetailComponent},
    { path: 'notFound', component: FilmNotFindComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(filmsRoutes);


@NgModule({
    //SHOW DIRECTIVES FOR ALL PROJECT - CHILD* (SUBFILE - APP)
    imports : [RouterModule.forChild(filmsRoutes)],
    exports : [RouterModule]
})
export class FilmsRoutingModule {}