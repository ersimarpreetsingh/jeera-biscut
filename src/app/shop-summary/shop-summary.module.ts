import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopSummaryPageRoutingModule } from './shop-summary-routing.module';

import { ShopSummaryPage } from './shop-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopSummaryPageRoutingModule
  ],
  declarations: [ShopSummaryPage]
})
export class ShopSummaryPageModule {}
