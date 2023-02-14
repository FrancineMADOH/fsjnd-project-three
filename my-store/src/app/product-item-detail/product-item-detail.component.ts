import { Component,OnInit } from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import {ProductService } from '../services/product.service'
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})

export class ProductItemDetailComponent implements  OnInit {
  id=0;
  product:Product;
  title:string = 'Product details'

  constructor(private router:ActivatedRoute, private productService:ProductService){
    this.product = {
      name:'',
      price:0,
      url:'',
      description:'',
      qty_available:0,
      reservation:0
    }
  }
  

  ngOnInit():void{
    //@ts-ignore
    this.router.params.subscribe((data)=>(this.id = parseInt(data['id'],10)));
    this.productService.getAllProducts().subscribe((data)=>{
      this.product = data.find((el)=> el.id===this.id)  as Product
    })
  }

}
