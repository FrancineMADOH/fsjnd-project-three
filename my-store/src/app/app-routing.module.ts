import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {ProductItemDetailComponent} from './product-item-detail/product-item-detail.component'


const routes: Routes = [
  {path: '', redirectTo:'products', pathMatch: 'full'},
  {path:'products', component:ProductListComponent},
  {path:"products/:id", component:ProductItemDetailComponent},
  {path:"cart", component:CartComponent},
  {path:"confirmation", component:ConfirmationComponent},
  {path:"about", component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
