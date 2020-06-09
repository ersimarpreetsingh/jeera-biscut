import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopAddOnsPage } from './shop-add-ons.page';

const routes: Routes = [
  {
    path: '',
    component: ShopAddOnsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopAddOnsPageRoutingModule {}
