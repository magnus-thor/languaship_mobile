import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  locations: any
  languages: any
  learnings: any
  nativeLanguage: any
  learnLanguage: any

  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams) {

      this.locations = [
              'STOCKHOLM',
              'GOTHENBURG',
              'MALMO',
              'ZURICH',
              'ROME',
              'AMSTERDAM'
        ]

      this.languages = [
            'ENGLISH',
            'SPANISH',
            'ITALIAN',
            'DUTCH',
            'SWEDISH',
            'FRENCH'
      ]

      this.learnings = [
            'ENGLISH',
            'SPANISH',
            'ITALIAN',
            'DUTCH',
            'SWEDISH',
            'FRENCH'
      ]
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
