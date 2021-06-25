import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtorCreateComponent } from './ator/ator-create/ator-create.component';
import { AtorEditComponent } from './ator/ator-edit/ator-edit.component';
import { AtorIndexComponent } from './ator/ator-index/ator-index.component';
import { GenreCreateComponent } from './genre/genre-create/genre-create.component';
import { GenreEditComponent } from './genre/genre-edit/genre-edit.component';
import { GenreIndexComponent } from './genre/genre-index/genre-index.component';
import { HomeComponent } from './home/home.component';
import { MovietheaterCreateComponent } from './movie-theater/movietheater-create/movietheater-create.component';
import { MovietheaterEditComponent } from './movie-theater/movietheater-edit/movietheater-edit.component';
import { MovietheaterIndexComponent } from './movie-theater/movietheater-index/movietheater-index.component';
import { FilterComponent } from './movies/filter/filter.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';

const routes: Routes = [

  { path: '', component: HomeComponent },



  { path: 'genre', component: GenreIndexComponent },
  { path: 'genre/create', component: GenreCreateComponent },
  { path: 'genre/edit/:id', component: GenreEditComponent },

  { path: 'ator', component: AtorIndexComponent },
  { path: 'ator/create', component: AtorCreateComponent },
  { path: 'ator/edit/:id', component: AtorEditComponent },

  { path: 'movietheater', component: MovietheaterIndexComponent },
  { path: 'movietheater/create', component: MovietheaterCreateComponent },
  { path: 'movietheater/edit/:id', component: MovietheaterEditComponent },

  { path: 'movie/filter', component: FilterComponent },
  { path: 'movie/create', component: MovieCreateComponent },
  { path: 'movie/edit/:id', component: MovieEditComponent },

  // ---------------------------Wildcard as a Catch-All Route-----------------------------------
  { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
