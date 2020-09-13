import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent implements OnInit {

  @Input() public rating = 5;

  public get fullStar(): number[] {
    const totalFullStars = Math.floor(this.rating);
    return Array(totalFullStars).fill(0);
  }

  public get hasHalfStar(): boolean {
    const highestRating = 5;
    const hasHalfStar = (this.rating - Math.floor(this.rating) >= 0.5) && this.rating !== 5;

    return hasHalfStar;
  }

  public get emptyStars(): number[] {

    const highestRating = 5;
    const totalEmptyStars = Math.floor(highestRating - this.rating);
    return Array(totalEmptyStars).fill(0);


  }

  constructor() { }

  ngOnInit(): void {
  }

}
