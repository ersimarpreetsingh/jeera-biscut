import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopOrderedPage } from './shop-ordered.page';

const routes: Routes = [
  {
    path: '',
    component: ShopOrderedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopOrderedPageRoutingModule {}
