import { Injectable } from '@nestjs/common';

import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      categoryId: 1,
      productName: 'Product 1',
      price: 100,
    },
    {
      id: 2,
      categoryId: 2,
      productName: 'Product 2',
      price: 200,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }
  createProduct(): string {
    return ' Create product';
  }
  detailProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }
  updateProduct(): string {
    return ' Update product';
  }
  deleteProduct(): string {
    return ' Delete product';
  }
}
