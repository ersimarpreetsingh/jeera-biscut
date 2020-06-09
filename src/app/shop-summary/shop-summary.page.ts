import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-summary',
  templateUrl: './shop-summary.page.html',
  styleUrls: ['./shop-summary.page.scss'],
})
export class ShopSummaryPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  checkout() {
    this.navCtrl.navigateForward('shop-checkout');
  }
  
  back() {
    this.navCtrl.pop();
  }

}
