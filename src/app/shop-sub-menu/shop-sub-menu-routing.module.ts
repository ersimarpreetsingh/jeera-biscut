import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopSubMenuPage } from './shop-sub-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ShopSubMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopSubMenuPageRoutingModule {}
