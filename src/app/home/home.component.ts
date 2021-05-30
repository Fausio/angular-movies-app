import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  MarvelMovies: any ;
  DCMovies: any ;
  display = true ;
 
  constructor() { }


  handleRating(rate: number){
    alert(`You select ${rate} stars`);
  }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.DCMovies = [
        {
          title: 'Man of stiil',
          releaseDate: new Date(),
          price: 122.4,
          poster : "https://image.tmdb.org/t/p/w154/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg"
        },
        {
          title: 'Batman VS Superman',
          releaseDate: new Date(),
          price: 122.5,
          poster : "https://image.tmdb.org/t/p/w154/zO5913BWcWYrhgACNpaaw9CCycX.jpg"
        },
        {
          title: 'Justice league Zander Cut',
          releaseDate: new Date(),
          price: 122.4,
          poster:"https://image.tmdb.org/t/p/w154/kn72J6BFcN71VYOl8sTVeo7x9ph.jpg"
          
        },
        {
          title: 'Batman VS Superman',
          releaseDate: new Date(),
          price: 122.4,
          poster: "https://image.tmdb.org/t/p/w154/w8Hi3GI4q1oR6EImrDWrAQFn8Ha.jpg"
        },
        {
          title: 'Justice league Zander Cut',
          releaseDate: new Date(),
          price: 122.4,
          poster: "https://image.tmdb.org/t/p/w154/qDA95ebiy3W3m8hTRB3xZNZVVBM.jpg"
     
        } 
      ]

      this.MarvelMovies =[]
    }, 3000);

  }

}
