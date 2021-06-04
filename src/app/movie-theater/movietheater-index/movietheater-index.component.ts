import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movietheater-index',
  templateUrl: './movietheater-index.component.html',
  styleUrls: ['./movietheater-index.component.css']
})
export class MovietheaterIndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  SaveChanges(){
    this.router.navigate(['/movietheater/create'])
  }

}
