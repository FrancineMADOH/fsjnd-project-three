import { Component,OnInit } from '@angular/core';
import {Product} from '../models/product';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})

export class ConfirmationComponent implements OnInit {
  name = '';
  shoppinCartList:Product[]=[];
  total = 0;

  constructor(private route:ActivatedRoute, private shoppingcartService:ShoppingCartService){}
  ngOnInit():void{
    this.name = this.route.snapshot.paramMap.get('name') as string;
    this.shoppinCartList = this.shoppingcartService.getShoppingCart();
    this.total= this.shoppingcartService.cartTotal();
    this.shoppingcartService.resetCart();
  }

}
