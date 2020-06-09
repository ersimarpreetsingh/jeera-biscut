import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-sub-menu',
  templateUrl: './shop-sub-menu.page.html',
  styleUrls: ['./shop-sub-menu.page.scss'],
})
export class ShopSubMenuPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  openCart() {
    this.navCtrl.navigateForward('shop-cart');
  }

  back() {
    this.navCtrl.pop();
  }
}
