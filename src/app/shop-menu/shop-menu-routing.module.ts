import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopMenuPage } from './shop-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ShopMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopMenuPageRoutingModule {}
