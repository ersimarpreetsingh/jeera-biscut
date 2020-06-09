import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-selection',
  templateUrl: './shop-selection.page.html',
  styleUrls: ['./shop-selection.page.scss'],
})
export class ShopSelectionPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  chooseShop() {
    this.navCtrl.navigateForward('shop-menu');
  }
}
