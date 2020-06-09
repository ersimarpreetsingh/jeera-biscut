import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-menu',
  templateUrl: './shop-menu.page.html',
  styleUrls: ['./shop-menu.page.scss'],
})
export class ShopMenuPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  openSubMenu() {
    this.navCtrl.navigateForward('shop-sub-menu');
  }

}
