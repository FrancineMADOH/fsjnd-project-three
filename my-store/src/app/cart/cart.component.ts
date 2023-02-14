import { Component,OnInit } from '@angular/core';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {Product}from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingCart:Product[] = [];
  total:number =0;

  constructor(private cartService:ShoppingCartService){}
  ngOnInit(){
    this.shoppingCart = this.cartService.getShoppingCart();
    this.total= this.cartService.cartTotal();
  }

  removeProduct(product:Product):void{
    this.shoppingCart = this.cartService.removeProduct(product);
    this.total = this.cartService.cartTotal()
  }

}
