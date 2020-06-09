import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-checkout',
  templateUrl: './shop-checkout.page.html',
  styleUrls: ['./shop-checkout.page.scss'],
})
export class ShopCheckoutPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  orderConfirmation() {
    this.navCtrl.navigateForward('shop-ordered');
  }
}
