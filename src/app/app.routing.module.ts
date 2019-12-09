import { FilmsModule } from './films/films.module';
import { FilmFormsGuard } from './guards/film-forms.guards';
import { FilmsGuard } from './guards/films.guards';
import { NgModule } from '@angular/core';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth-guard';
import { FilmDetailComponent } from './films/film-detail/film-detail.component';
import { FilmsComponent } from './films/films.component';
import { FilmNotFindComponent } from './films/film-not-find/film-not-find.component';
//import { FilmsComponent } from './films/films.component';
//import { FilmDetailComponent } from './films/film-detail/film-detail.component';
//import { FilmNotFindComponent } from './films/film-not-find/film-not-find.component';

//CREATE ROUTES - FROM APLICATION

const appRoutes : Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'film',
        loadChildren: 'src/app/films/films.module#FilmsModule', 
        canActivate: [AuthGuard],
        canActivateChild: [FilmsGuard]
    },
    { path: 'films', 
        loadChildren: 'src/app/films/films.module#FilmsModule', 
        canActivate: [AuthGuard],
        canActivateChild: [FilmsGuard]},
    { path: 'film-forms', 
        loadChildren: 'src/app/film-forms/film-forms.module#FilmFormsModule', 
        canActivate: [AuthGuard],
        canActivateChild: [FilmFormsGuard] },
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


@NgModule({
    //SHOW DIRECTIVES FOR ALL PROJECT
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule {}