import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtorCreateComponent } from './ator/ator-create/ator-create.component';
import { AtorIndexComponent } from './ator/ator-index/ator-index.component';
import { GenreCreateComponent } from './genre/genre-create/genre-create.component';
import { GenreIndexComponent } from './genre/genre-index/genre-index.component';
import { HomeComponent } from './home/home.component';
import { MovietheaterCreateComponent } from './movie-theater/movietheater-create/movietheater-create.component';
import { MovietheaterIndexComponent } from './movie-theater/movietheater-index/movietheater-index.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  
  { path:'genre', component:GenreIndexComponent},
  { path:'genre/create', component:GenreCreateComponent},

  { path:'ator', component:AtorIndexComponent},
  { path:'ator/create', component:AtorCreateComponent},

  { path:'movietheater', component:MovietheaterIndexComponent},
  { path:'movietheater/create', component:MovietheaterCreateComponent},

  { path:'movie/create', component:MovieCreateComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
