import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService } from '../services/product.service'
import { Product } from '../models/product';
import {ShoppingCartService} from '../services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})

export class ProductItemDetailComponent implements  OnInit {
  @Input() product:Product;
  path: string;
  id=0;
  title:string = 'Product details'
  reservation =0;
  qtyAvailable:number[] = [];


  constructor(

    private route:ActivatedRoute, 
    private router:Router,
    private productService:ProductService,
    private shoppingcartService:ShoppingCartService){
    this.product = {
      name:'',
      price:0,
      url:'',
      description:'',
      qty_available:0,
    }
    this.path = '';
    
  }
  

  ngOnInit():void{
    this.path = this.router.url;
    this.route.params.subscribe((data)=>(this.id = parseInt(data.id,10)));
    

    this.productService.getAllProducts().subscribe((data)=>{
      this.product = data.filter(({id}) => id === this.id)[0]
      
    });
    this.qtyAvailable = [
      ...Array(this.product.qty_available).keys()
    ].map((el)=>el+1);
  }

  addToCart(product:Product):void{
    this.product.reservation = this.reservation;
    this.shoppingcartService.addToCart(product);
    alert(` ${this.reservation} ${this.product.name} added to cart!`)
  }
  

}

