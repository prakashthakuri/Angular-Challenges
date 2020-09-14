import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() public isOn = false;
  public toggle() {
    this.isOn = !this.isOn;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
