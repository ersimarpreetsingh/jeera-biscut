import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.page.html',
  styleUrls: ['./shop-cart.page.scss'],
})
export class ShopCartPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  confirmOrder() {
    this.navCtrl.navigateForward('shop-summary');
  }

  back() {
    this.navCtrl.pop();
  }

}
