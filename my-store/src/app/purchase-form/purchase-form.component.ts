import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})
export class PurchaseFormComponent implements OnInit {
  title = "Enter your informations"
  name:string = '';
  address:string = '';
  total:number = 0;
  cardInfos:string='';
  constructor(private router:Router){
  }

  ngOnInit():void{}
  validateName(name:string){
    this.name = name
    console.log('this function fires')
  }

  OnPurchase():void{
    this.router.navigate([
      'confirm-order',
      {name:this.name, address:this.address,total:this.total}
    ])
  }

}



