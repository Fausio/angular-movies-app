import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { atorCreationDTO } from '../ator.model';

@Component({
  selector: 'app-ator-edit',
  templateUrl: './ator-edit.component.html',
  styleUrls: ['./ator-edit.component.css']
})
export class AtorEditComponent implements OnInit {

  constructor(private router :Router, private activatedRoute: ActivatedRoute) { }

  atorToEdit: atorCreationDTO = {
    Name:'Luis Matsinhe',
    DateOfBirth: new Date()
  }
  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe( paramiter =>{
      //  alert(paramiter.id);
    })
 
    
  }


  SaveChanges(event : atorCreationDTO){

    console.log(event);

  }
}
