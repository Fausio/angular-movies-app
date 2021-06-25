import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { HomeComponent } from './home/home.component';
import { GenreIndexComponent } from './genre/genre-index/genre-index.component';
import { GenreCreateComponent } from './genre/genre-create/genre-create.component';
import { AtorIndexComponent } from './ator/ator-index/ator-index.component';
import { AtorCreateComponent } from './ator/ator-create/ator-create.component';
import { MovietheaterIndexComponent } from './movie-theater/movietheater-index/movietheater-index.component';
import { MovietheaterCreateComponent } from './movie-theater/movietheater-create/movietheater-create.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { AtorEditComponent } from './ator/ator-edit/ator-edit.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovietheaterEditComponent } from './movie-theater/movietheater-edit/movietheater-edit.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormGenreComponent } from './genre/form-genre/form-genre.component';
import { GenreEditComponent } from './genre/genre-edit/genre-edit.component';
import { FilterComponent } from './movies/filter/filter.component';
import { AtorFormComponent } from './ator/ator-form/ator-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    HomeComponent,
    GenreIndexComponent,
    GenreCreateComponent,
    AtorIndexComponent,
    AtorCreateComponent,
    MovietheaterIndexComponent,
    MovietheaterCreateComponent,
    MovieCreateComponent,
    AtorEditComponent,
    MovieEditComponent,
    MovietheaterEditComponent,
    FormGenreComponent,
    GenreEditComponent,
    FilterComponent,
    AtorFormComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
