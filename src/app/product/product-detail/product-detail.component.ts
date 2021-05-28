import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productTitle: string;
  product: Product ;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
   this.productTitle = '';
   this.product = new Product('hello', ['taht'], -1, 'title', 'this si vosiafldk', ['dsfsadf', 'fdsfsdf']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.productTitle = params['id'];
        this.product = this.productService.getProduct(this.productTitle);
      }
    );

  }

}
