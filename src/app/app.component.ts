import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie app in angular and .Net Core 5';

  movies = [
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
}
