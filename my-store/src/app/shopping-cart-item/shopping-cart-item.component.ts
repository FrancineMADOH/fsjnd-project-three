import { Component,OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() shoppingCartItem:Product;
  @Output() removeProduct: EventEmitter<Product> = new EventEmitter;
  

  constructor(){
    this.shoppingCartItem = {
      name:" ",
      price:0,
      url:" ",
      description:" ",
      qty_available:0,
      reservation:0
    }
  }
  ngOnInit():void{}

  removeProductFromCart(shoppingCartItem:Product):void{
    console.log('function work')
    this.removeProduct.emit(shoppingCartItem)
  }

}





