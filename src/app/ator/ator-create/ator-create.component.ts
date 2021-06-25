import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { atorCreationDTO } from '../ator.model';

@Component({
  selector: 'app-ator-create',
  templateUrl: './ator-create.component.html',
  styleUrls: ['./ator-create.component.css']
})
export class AtorCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(event : atorCreationDTO){

    console.log(event);
    this.router.navigate(['/ator'])
  }

}
