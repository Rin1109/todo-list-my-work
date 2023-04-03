import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {name: 'Phone 1', description: ''},
    {name: 'Phone 2', description: 'Really good phone'},
    {name: 'Phone 3', description: 'Also good phone'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  share() {

  }
}
