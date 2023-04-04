import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {name: 'Phone 1', description: '', price: 1000},
    {name: 'Phone 2', description: 'Really good phone', price: 500},
    {name: 'Phone 3', description: 'Also good phone', price: 100},
  ]

  phones = [
    {name: 'Apple iPhone 14 Pro Max', description: 'Best iPhone Overall', price: 1100},
    {name: 'Google Pixel 7', description: '', price: 449},
    {name: 'Samsung Galaxy S23 Ultra', description: 'Best for Artists and Photographers', price: 1000},
    {name: 'Samsung Galaxy Z Fold 4', description: 'Best Folding Phone', price: 1320},
  ]

  showPriceFlag = false;


  constructor() { }

  ngOnInit(): void {
  }

  share() {
    return

  }

  showPrice() {
    this.showPriceFlag = true;
  }
}
