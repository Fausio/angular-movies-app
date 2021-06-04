import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movietheater-edit',
  templateUrl: './movietheater-edit.component.html',
  styleUrls: ['./movietheater-edit.component.css']
})
export class MovietheaterEditComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( paramiter =>{
      //  alert(paramiter.id);
    })
  }

}
