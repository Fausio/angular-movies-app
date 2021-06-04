import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ator-create',
  templateUrl: './ator-create.component.html',
  styleUrls: ['./ator-create.component.css']
})
export class AtorCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  SaveChanges(){
    this.router.navigate(['/ator'])
  }

}
