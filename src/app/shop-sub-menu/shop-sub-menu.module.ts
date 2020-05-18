import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopSubMenuPageRoutingModule } from './shop-sub-menu-routing.module';

import { ShopSubMenuPage } from './shop-sub-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopSubMenuPageRoutingModule
  ],
  declarations: [ShopSubMenuPage]
})
export class ShopSubMenuPageModule {}
