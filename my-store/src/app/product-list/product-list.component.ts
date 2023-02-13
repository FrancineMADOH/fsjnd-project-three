import { Component,OnInit } from '@angular/core';
import {ProductService } from '../services/product.service'
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  allProducts:Product[] = [];
  title:string ='Shopping List'

  constructor(private productService: ProductService){}

  ngOnInit(): void{
    this.productService.getAllProducts().subscribe((data:Product[])=>{
      return (this.allProducts  = data.map((el:Product)=>{
        return {...el, reservation:0}
      }))
    })
  }

}
