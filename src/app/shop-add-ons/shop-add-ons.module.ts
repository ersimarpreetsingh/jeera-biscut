import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopAddOnsPageRoutingModule } from './shop-add-ons-routing.module';

import { ShopAddOnsPage } from './shop-add-ons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopAddOnsPageRoutingModule
  ],
  declarations: [ShopAddOnsPage]
})
export class ShopAddOnsPageModule {}
