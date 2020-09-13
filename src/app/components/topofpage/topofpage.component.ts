import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-topofpage',
  templateUrl: './topofpage.component.html',
  styleUrls: ['./topofpage.component.scss']
})
export class TopofpageComponent implements OnInit {
  public isShown = false;

  constructor(private viewportScroller: ViewportScroller) { }

  @HostListener('window:scroll') onWindowScroll(){
    console.log("windows is scrolling");
    const yCoordinate = this.viewportScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 400;

  }


  public gotoTop(): void {

    this.viewportScroller.scrollToPosition([0, 0]);

  }

  ngOnInit(): void {
  }

}
