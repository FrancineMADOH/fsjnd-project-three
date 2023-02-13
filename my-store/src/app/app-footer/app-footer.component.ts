import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
   copyright:number = new Date().getFullYear() ;
   title:string = "Franca's"

  constructor(){}
  ngOnInit():void{

  }
}
