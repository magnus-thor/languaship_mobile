import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  currentUser: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  // goToHome() {
  //   if (this.currentUser){
  //     this.navCtrl.setRoot(HomePage);
  //   }
  //   else {
  //     let alert = this.alertCtrl.create({
  //       title: 'Log in please',
  //       subTitle: 'You need to be logged in!',
  //       buttons: ['Ok']
  //     });
  //       alert.present();
  //   }
  // }
}
