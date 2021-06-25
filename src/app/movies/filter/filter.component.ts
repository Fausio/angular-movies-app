import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl:'./filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup | any  ;

  filterMovies = [
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

  originalFilterMovies = this.filterMovies;

  genres = [
    { id: 1, Name: 'Farowest' },
    { id: 2, Name: 'Drama' },
    { id: 3, Name: 'Comedy' }
  ];


  ngOnInit(): void {
    

    this.form = this.formBuilder.group({ 
      Title:'',
      GenreId:0,
      UpcomingReleases:false,
      InTheaters: false
    });
 
    this.form.valueChanges
    .subscribe((values: any) => {
     this.filterMovies = this.originalFilterMovies;
     this.filterMoviesMethod(values);
    });



  }

  filterMoviesMethod(value: any){
      if(value.Title){
          this.filterMovies = this.filterMovies.filter(x => x.title.indexOf(value.Title) !== -1);
      }

  }
  clearForm(){

  }


}
