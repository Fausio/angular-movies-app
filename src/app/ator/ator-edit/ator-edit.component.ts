import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { atorCreationDTO  } from '../ator.model';

@Component({
  selector: 'app-ator-edit',
  templateUrl:'./ator-edit.component.html',
  styleUrls: ['./ator-edit.component.css']
})
export class AtorEditComponent implements OnInit {

  constructor(private router :Router, private activatedRoute: ActivatedRoute) { }

  atorToEdit: atorCreationDTO = {
    Name:'Luis Matsinhe',
    DateOfBirth: new Date()
    
  }
  
  // Pic: 'https://m.media-amazon.com/images/M/MV5BMTA2OTE1Njg4NjVeQTJeQWpwZ15BbWU3MDAyNjU4MDM@._V1_UY317_CR22,0,214,317_AL_.jpg'
    


  ngOnInit(): void {

    this.activatedRoute.params.subscribe( paramiter =>{
      //  alert(paramiter.id);
    })
 
    
  }


  SaveChanges(event : atorCreationDTO){

    console.log(event);

  }
}
