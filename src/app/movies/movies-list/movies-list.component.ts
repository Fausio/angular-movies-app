import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
}) 

export class MoviesListComponent implements OnInit {

  title = 'Movie app in angular and .Net Core 5';
  movies;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {

      

      this.movies = [
        {
          title: 'Man of stiil',
          releaseDate: new Date(),
          price: 122.4
        },
        {
          title: 'Batman VS Superman',
          releaseDate: new Date(),
          price: 122.4
        },
        {
          title: 'Justice league Zander Cut',
          releaseDate: new Date(),
          price: 122.4
        }
      ]

    }, 3000);

  }




}