import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-languages',
  templateUrl: 'languages.html',
})

export class LanguagesPage {

  languages: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.languages =[
          'ENGLISH',
          'SPANISH',
          'ITALIAN',
          'DUTCH',
          'SWEDISH',
          'FRENCH'
    ]
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguagesPage');
    }
}
