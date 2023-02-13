import { Component,OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product;
  path: string;
  reservation = 0;

  constructor(private router:Router){
    this.product = {
      name:" ",
      price:0,
      url:" ",
      description:" ",
      qty_available:0
    };
    this.path = router.url;
  }

  ngOnInit():void{}

}
