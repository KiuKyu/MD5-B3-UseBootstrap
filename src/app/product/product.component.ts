import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 12',
      price: 42000
    },
    {
      id: 2,
      name: 'iPhone 11',
      price: 16000
    },
    {
      id: 3,
      name: 'iPhone X',
      price: 22000
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
