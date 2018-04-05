import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


}
