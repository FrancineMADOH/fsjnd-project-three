import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product} from '../models/product';
import {ProductService} from '../services/product.service'

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  id =0;
  productItem:Product;
  constructor(private router: ActivatedRoute,private productService: ProductService){
    this.productItem={
      "name": "",
      "price": 0,
      "url": "",
      "description": "",
      "qty_available":0
    }

  }

  ngOnInit(): void {
    this.router.params.subscribe((data:any) => (this.id = parseInt(data.id, 10)));
    this.productService.getAllProducts().subscribe((data:any) => {
      this.productItem = data.find((el:any) => el.id === this.id) as unknown as Product;
    });
  }

}

