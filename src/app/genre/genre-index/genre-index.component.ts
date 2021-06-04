import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-index',
  templateUrl: './genre-index.component.html',
  styleUrls: ['./genre-index.component.css']
})
export class GenreIndexComponent implements OnInit {
  
  constructor(private router: Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  SaveChenges(){
    this.router.navigate(['/genre-create'])
  }
 
}
