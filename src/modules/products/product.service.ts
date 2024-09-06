import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';

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
  createProduct(productDto: ProductDto): Product {
    const product: Product = {
      id: this.products.length + 1,
      ...productDto,
    };
    this.products.push(product);
    return product;
  }
  detailProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }
  updateProduct(productDto: ProductDto, id: number): Product {
    const index = this.products.findIndex((pro) => pro.id == id);
    this.products[index].categoryId = productDto.categoryId;
    this.products[index].price = productDto.price;
    this.products[index].productName = productDto.productName;

    return this.products[index];
  }
  deleteProduct(): string {
    return ' Delete product';
  }
}
