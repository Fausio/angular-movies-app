import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ator-index',
  templateUrl: './ator-index.component.html',
  styleUrls: ['./ator-index.component.css']
})
export class AtorIndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  SaveChanges(){
    this.router.navigate(['/ator/create'])
  }

}
