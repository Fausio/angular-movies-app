import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreCreateComponent } from './genre/genre-create/genre-create.component';
import { GenreIndexComponent } from './genre/genre-index/genre-index.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path:'genre', component:GenreIndexComponent},
  { path:'genre-create', component:GenreCreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
