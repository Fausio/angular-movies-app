import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {

  title = 'Movie app in angular and .Net Core 5';

  @Input()
  movies: any;

  constructor() { }

  remove(index: number){

    this.movies.splice(index - 1,1)
  }

  ngOnInit(): void {

  }
}