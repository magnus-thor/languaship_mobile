import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any
  user: any
  constructor(public navCtrl: NavController) {
    this.user =
    {
      id: 43,
      type: "users",
      attributes: {
        name: "Homer Simpson",
        city: "Springfield",
        age: 40,
        profileImage: "https://url-to-som-stock-photo",
        languages: [
          {
            name: "English",
            isoCode: "ENG",
            proficiency: "native"
          }
        ]
      }
    }
    this.users =[
      { id: 2, type: "users", attributes: [] },
      { id: 3, type: "users", attributes: [] },
      { id: 4, type: "users", attributes: [] }
    ];
  }
}
