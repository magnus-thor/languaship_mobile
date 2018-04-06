import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  locations: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.locations = [
            'STOCKHOLM',
            'GOTHENBURG',
            'MALMO',
            'ZURICH',
            'ROME',
            'AMSTERDAM'
      ]
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad LocationPage');
    }
  }
