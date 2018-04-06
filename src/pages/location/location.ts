import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  locations: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.locations = [
        { id: 1, type: "locations", attributes: {
          name: "Stockholm",
          locationImage: "https://sweden.nordicvisitor.com/travel-deals/partially-guided-tours/stockholm-christmas-weekend/125/",
          }
        },
        { id: 2, type: "locations", attributes: {
          name: "Göteborg",
          locationImage: "https://www.google.se/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fbe%2FKeizersgrachtReguliersgrachtAmsterdam.jpg%2F270px-KeizersgrachtReguliersgrachtAmsterdam.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAmsterdam&docid=nzt-5Gj0-dJx-M&tbnid=Gd0kDMFDRfa4ZM%3A&vet=10ahUKEwi7lKj07aPaAhUJ6CwKHZBDBroQMwg1KAMwAw..i&w=270&h=180&bih=631&biw=1260&q=amsterdam&ved=0ahUKEwi7lKj07aPaAhUJ6CwKHZBDBroQMwg1KAMwAw&iact=mrc&uact=8",
          }
        },
        { id: 3, type: "locations", attributes: {
          name: "Paris",
          locationImage: "https://www.google.se/imgres?imgurl=https%3A%2F%2Fwww.accessmasterstour.com%2Fapplication%2Fpublic%2Fcache%2Fevent-paris-620x370.jpg&imgrefurl=https%3A%2F%2Fwww.accessmasterstour.com%2Fevents%2Fcity%2Fparis&docid=u3rwlsoQ-BN47M&tbnid=iDv80XPIQRpHOM%3A&vet=10ahUKEwi_97vL7aPaAhUF3CwKHVGIDAcQMwjkASgsMCw..i&w=620&h=370&bih=631&biw=1260&q=paris&ved=0ahUKEwi_97vL7aPaAhUF3CwKHVGIDAcQMwjkASgsMCw&iact=mrc&uact=8",
          }
        },
      ];
    }
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LocationPage');
  // }
