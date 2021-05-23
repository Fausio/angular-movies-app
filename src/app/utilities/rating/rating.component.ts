import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Input()
  maxRating = 5;
  maxRatingArr: any;

  selectedRate = 0;
  priviosRate = 0;



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
  }

}
