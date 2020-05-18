import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'shop-selection',
    loadChildren: () => import('./shop-selection/shop-selection.module').then( m => m.ShopSelectionPageModule)
  },
  {
    path: 'shop-menu',
    loadChildren: () => import('./shop-menu/shop-menu.module').then( m => m.ShopMenuPageModule)
  },
  {
    path: 'shop-sub-menu',
    loadChildren: () => import('./shop-sub-menu/shop-sub-menu.module').then( m => m.ShopSubMenuPageModule)
  },
  {
    path: 'shop-cart',
    loadChildren: () => import('./shop-cart/shop-cart.module').then( m => m.ShopCartPageModule)
  },
  {
    path: 'shop-add-ons',
    loadChildren: () => import('./shop-add-ons/shop-add-ons.module').then( m => m.ShopAddOnsPageModule)
  },
  {
    path: 'shop-summary',
    loadChildren: () => import('./shop-summary/shop-summary.module').then( m => m.ShopSummaryPageModule)
  },
  {
    path: 'shop-checkout',
    loadChildren: () => import('./shop-checkout/shop-checkout.module').then( m => m.ShopCheckoutPageModule)
  },
  {
    path: 'shop-ordered',
    loadChildren: () => import('./shop-ordered/shop-ordered.module').then( m => m.ShopOrderedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
