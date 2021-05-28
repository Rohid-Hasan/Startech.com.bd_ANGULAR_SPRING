import { Product } from './../product.model';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = [];
   }

  ngOnInit(): void {
    console.log('ng oninit run');
    this.products = this.productService.getProducts();
  }

}
