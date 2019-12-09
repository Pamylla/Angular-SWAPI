import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FilmFormsComponent } from './film-forms.component';

const filmFormsRoutes = [
    { path: '', component: FilmFormsComponent , 
        children : [
            { path: 'new', component: FormComponent },
            { path: ':id', component: DetailComponent },
            { path: 'edit', component: FormComponent },
            
    ] },

];

@NgModule({
    imports: [RouterModule.forChild(filmFormsRoutes)],
    exports: [RouterModule]
})

export class FilmFormsRoutingModule {}