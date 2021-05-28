import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ProductService{
  productChanged = new Subject<Product[]>();

  private products: Product[] = [
    new Product('monitor', ['screensize', 'resulation' , 'refresh rate'], 1, 'this is a first monitor', 'THis is my description ', ['1920x1080 resulation', 'this is beautiful', 'with stand']  ),
    new Product('monitor', ['screensize', 'resulation' , 'refresh rate'], 2, 'this is a beautiful monitor', 'THis is my description ', ['1920x1080 resulation', 'this is beautiful', 'with stand']  ),
    new Product('monitor', ['screensize', 'resulation' , 'refresh rate'], 3, 'this is a beautiful monitor', 'THis is my description ', ['1920x1080 resulation', 'this is beautiful', 'with stand']  ),
    new Product('monitor', ['screensize', 'resulation' , 'refresh rate'], 4, 'this is a beautiful monitor', 'THis is my description ', ['1920x1080 resulation', 'this is beautiful', 'with stand']  ),
    new Product('monitor', ['screensize', 'resulation' , 'refresh rate'], 5, 'this is a beautiful monitor', 'THis is my description ', ['1920x1080 resulation', 'this is beautiful', 'with stand']  ),
    new Product('monitor', ['screensize', 'resulation' , 'refresh rate'], 6, 'this is a beautiful monitor', 'THis is my description ', ['1920x1080 resulation', 'this is beautiful', 'with stand']  ),
    new Product('monitor', ['screensize', 'resulation' , 'refresh rate'], 7, 'this is a beautiful monitor', 'THis is my description ', ['1920x1080 resulation', 'this is beautiful', 'with stand']  ),
    new Product('monitor', ['screensize', 'resulation' , 'refresh rate'], 8, 'this is a beautiful monitor', 'THis is my description ', ['1920x1080 resulation', 'this is beautiful', 'with stand']  )
  ];

  getProducts(): Product[] {
    return this.products.slice();
  }

  getProduct(title: string): Product {
    let id = 0;
    this.products.forEach(element => {
      if (element.title === title) {
        id =  element.id;
      }
    });
    return this.products[id];
  }
}
