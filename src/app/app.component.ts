import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
 {
  title = 'Movie app in angular and .Net Core 5';

  ngOnInit(): void {
    
    setTimeout(() => {
      this.DCMovies = [
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
    }, 2000);


    setTimeout(() => {
      this.MarvelMovies = [
        {
          title: 'Avangers',
          releaseDate: new Date(),
          price: 134.5
        },
        {
          title: 'Infinit War',
          releaseDate: new Date(),
          price: 234.4
        },
        {
          title: 'End Game',
          releaseDate: new Date(),
          price: 345.4
        }
      ]
    }, 3000);

  }

  MarvelMovies: any ;
  DCMovies: any ;


}
