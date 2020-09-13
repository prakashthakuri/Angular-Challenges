import { AccordionItem } from './../accordion/accordian-item.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss']
})

export class ComponentDocumentationComponent implements OnInit {
  public progressValue = 25;
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
