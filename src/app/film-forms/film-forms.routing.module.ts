import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FilmFormsComponent } from './film-forms.component';

const filmFormsRoutes = [
    { path: 'film-form', component: FilmFormsComponent , children : [
        //CHILDREN ROUTES
        //NEW - NEED TO BE FIRST BECAUSE :ID IS DYNAMIC
        { path: 'new', component: FormComponent },
        { path: ':id', component: DetailComponent },
        { path: ':id/edit', component: FormComponent },
        
    ] },

];

@NgModule({
    imports: [RouterModule.forChild(filmFormsRoutes)],
    exports: [RouterModule]
})

export class FilmFormsRoutingModule {}