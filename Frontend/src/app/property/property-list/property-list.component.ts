import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {


Properties :Array<any>=[
{
    "Id":1,
    "Name":"Birla",
    "Type":"House",
    "Price":12000
},
{
  "Id":2,
  "Name":"Smruti",
  "Type":"House",
  "Price":18000
},
{
  "Id":3,
  "Name":"Nirbi",
  "Type":"House",
  "Price":19000
},
{
  "Id":4,
  "Name":"Susanta",
  "Type":"House",
  "Price":20000
},
{
  "Id":5,
  "Name":"Rajesh",
  "Type":"House",
  "Price":17000
},
{
  "Id":6,
  "Name":"Ayan",
  "Type":"House",
  "Price":22000
},



]

  constructor() { }

  ngOnInit(): void {
  }

}
