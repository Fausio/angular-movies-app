import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.css']
})
export class GenreEditComponent implements OnInit {

  constructor(private activatedRout: ActivatedRoute) { }

model: genreCreationDTO = { Name : "Farowest" };


  ngOnInit(): void {
    this.activatedRout.params.subscribe(params => {

    })
  }

  SaveChenges(genreCreationDTO: genreCreationDTO){


  }
  
}
