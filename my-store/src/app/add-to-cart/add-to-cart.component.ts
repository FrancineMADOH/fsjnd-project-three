import { Component,OnInit, Input } from '@angular/core';
import {Product} from '../models/product';
import {ShoppingCartService} from '../services/shopping-cart.service'

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  @Input()product:Product;
  reservation =0;
  qtyAvailable:number[] = [];


  constructor(private shoppingcartService:ShoppingCartService){
    this.product = {
      name:'',
      price:0,
      url:'',
      description:'',
      qty_available:0,
      reservation:0
    }
  }
  ngOnInit(){
    this.qtyAvailable = [
      ...Array(this.product.qty_available).keys()
    ].map((el)=>el+1);
  }

  ngDocheck():void{

    if(this.qtyAvailable.length !== this.product.qty_available){
      this.qtyAvailable = [
        ...Array(this.product.qty_available).keys()
      ].map((el)=>el+1)
    }
  }

  addToCart(product:Product):void{
    this.product.reservation = this.reservation;
    this.shoppingcartService.addToCart(product);
    alert(` ${this.reservation} ${this.product.name} added to cart!`)
  }

}

