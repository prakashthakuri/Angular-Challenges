import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  @Input() public title = '';
  @Input() public component = 'Component';
  @Input() public directives = 'Directives';
  @Input() public services = 'Services';

  constructor() {}

  ngOnInit(): void {}
}
