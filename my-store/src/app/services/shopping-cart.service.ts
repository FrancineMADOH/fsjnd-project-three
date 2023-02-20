import { Injectable } from '@angular/core';
import {Product} from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  constructor() { }
  shoppingCart:Product[] = [];

  getShoppingCart():Product[]{
    return this.shoppingCart;
  }

  addToCart(product:Product):void{   
      this.shoppingCart.push(product);
  }

  cartTotal():number{
    return this.shoppingCart.reduce((price,total)=>{
      return price + total.price * Number(total.reservation);
    },0)
  }

  removeProduct(product:Product):Product[]{
    this.shoppingCart= this.shoppingCart.filter((el)=>el.id !== product.id);
    return this.shoppingCart;
  }
 

  resetCart():Product[]{
    this.shoppingCart= []
    return this.shoppingCart;
  }

 
}

