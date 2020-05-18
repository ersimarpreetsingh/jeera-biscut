import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopMenuPageRoutingModule } from './shop-menu-routing.module';

import { ShopMenuPage } from './shop-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopMenuPageRoutingModule
  ],
  declarations: [ShopMenuPage]
})
export class ShopMenuPageModule {}
