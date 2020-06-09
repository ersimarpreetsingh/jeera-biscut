import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopOrderedPageRoutingModule } from './shop-ordered-routing.module';

import { ShopOrderedPage } from './shop-ordered.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopOrderedPageRoutingModule
  ],
  declarations: [ShopOrderedPage]
})
export class ShopOrderedPageModule {}
