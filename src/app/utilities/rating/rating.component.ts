import { Component, Input, OnInit, Output } from '@angular/core';
// import * as EventEmitter from 'events';
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Input()
  maxRating = 5;
  
  @Input()
  selectedRate = 0;
 
  @Output()    
  onRating: EventEmitter<number> = new EventEmitter<number>();

  priviosRate = 0;
  maxRatingArr: any;

  ngOnInit(): void {

    this.maxRatingArr = Array(this.maxRating).fill(0);

  }

  handleMauseEnter(index: number) {
    this.selectedRate = index + 1;
  }

  handleMouseLeave() {

    if (this.selectedRate !== 0) {
      this.selectedRate = this.priviosRate;
    } else {
      this.selectedRate = 0;
    }
  }

  rate(index: number) {
    this.selectedRate = index + 1;
    this.priviosRate  = this.selectedRate;
    this.onRating.emit(this.selectedRate);
  }

}
