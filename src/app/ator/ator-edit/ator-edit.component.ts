import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ator-edit',
  templateUrl: './ator-edit.component.html',
  styleUrls: ['./ator-edit.component.css']
})
export class AtorEditComponent implements OnInit {

  constructor(private router :Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( paramiter =>{
      //  alert(paramiter.id);
    })
  }

}
