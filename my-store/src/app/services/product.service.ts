import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>('../assets/data.json');
    
  }
}
