import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    ProductItemComponent,
    ConfirmationComponent,
    CartComponent,
    AboutComponent,
    AppFooterComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
