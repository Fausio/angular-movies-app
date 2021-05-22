import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  template: `
    <p>
      generic-list works!
    </p>
  `,
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
