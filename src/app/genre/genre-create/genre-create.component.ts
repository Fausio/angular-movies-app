import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  SaveChenges() {
    // save file

    this.route.navigate(['/genre']);
  }

}
