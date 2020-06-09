import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopSummaryPage } from './shop-summary.page';

const routes: Routes = [
  {
    path: '',
    component: ShopSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopSummaryPageRoutingModule {}
