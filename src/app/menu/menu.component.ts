import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  Apptitle = 'Movie app in angular and .Net Core 5';

  constructor() { }

  ngOnInit(): void {
  }

}
