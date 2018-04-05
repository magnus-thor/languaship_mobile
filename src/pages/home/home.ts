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

    this.users =[
      { id: 1, type: "users", attributes: {
        name: "Homer Simpson",
        city: "Springfield",
        age: 40,
        profileImage: "http://cdn2.ubergizmo.com/wp-content/uploads/2016/02/homer-simpson.jpeg",
          languages: [
            {
              name: "English",
              isoCode: "ENG",
              proficiency: "native"
            }
          ]
        }
      },
      { id: 2, type: "users", attributes: {
        name: "Super Mario",
        city: "Rome",
        age: 30,
        profileImage: "https://www.techprincess.it/wp-content/uploads/2018/03/TechPrincess_MAR10Day_festeggiamenti-382x420.jpg",
          languages: [
            {
              name: "Italian",
              isoCode: "ITA",
              proficiency: "native"
            }
          ]
        }
      },
      { id: 3, type: "users", attributes: {
        name: "Obelix",
        city: "Paris",
        age: 25,
        profileImage: "http://www.asterix.com/imgs/perso3-3.png",
          languages: [
            {
              name: "French",
              isoCode: "FR",
              proficiency: "native"
            }
          ]
        }
      },
    ];
  }
}
