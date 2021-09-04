import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<any>=[{
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12001
  },
  {
    "Id":3,
    "Name":"Birla House",
    "Type":"House",
    "Price":12002
  },
  {
    "Id":3,
    "Name":"Birla House",
    "Type":"House",
    "Price":12003
  },
  {
    "Id":4,
    "Name":"Birla House",
    "Type":"House",
    "Price":12004
  },
  {
    "Id":5,
    "Name":"Birla House",
    "Type":"House",
    "Price":12005
  },
  {
    "Id":6,
    "Name":"Birla House",
    "Type":"House",
    "Price":12006
  },
  {
    "Id":7,
    "Name":"Birla House",
    "Type":"House",
    "Price":12007
  },
  {
    "Id":8,
    "Name":"Birla House",
    "Type":"House",
    "Price":12008
  },
  {
    "Id":9,
    "Name":"Birla House",
    "Type":"House",
    "Price":12009
  },
  {
    "Id":10,
    "Name":"Birla House",
    "Type":"House",
    "Price":12010
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
