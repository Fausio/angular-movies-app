import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movietheater-create',
  templateUrl: './movietheater-create.component.html',
  styleUrls: ['./movietheater-create.component.css']
})
export class MovietheaterCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  SaveChanges(){
    this.router.navigate(['/movietheater'])
  }


}
