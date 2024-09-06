import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';

export class ProductDto {
  @IsNotEmpty({ message: 'categoryId is required' })
  categoryId?: number;

  @MinLength(5, { message: 'productName is too short, at least 5 characters' })
  productName?: string;

  @IsNumber()
  price?: number;
}
