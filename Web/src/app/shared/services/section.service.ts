import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductType } from 'src/types';

@Injectable()
export class SectionService {

  constructor(private http: HttpClient) { }

  getProductByCategory(category: string){
    const url = `https://fakestoreapi.com/products/category/${category}`;
    return this.http.get<ProductType[]>(url);
  }

}
