import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {
  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": 24100
    },
    {
      "Id": 2,
      "Name": "Ada House",
      "Type": "House",
      "Price": 14200
    }, {
      "Id": 3,
      "Name": "Eva House",
      "Type": "Duplex",
      "Price": 15100
    }, {
      "Id": 4,
      "Name": "Blizzard House",
      "Type": "Villa",
      "Price": 32400
    }, {
      "Id": 5,
      "Name": "Macro House",
      "Type": "House",
      "Price": 14300
    }, {
      "Id": 6,
      "Name": "Pearl White House",
      "Type": "Apartment",
      "Price": 28000
    },
  ]
}
