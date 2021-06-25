import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form : FormGroup| any;

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
  }

}
