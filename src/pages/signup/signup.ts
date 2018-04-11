import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Nav, Events, Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Angular2TokenService } from 'angular2-token';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Slides) slides: Slides;

  locations: any
  languages: any
  learnings: any
  nativeLanguage: any
  learnLanguage: any
  pages: Array<{title: string, component: any}>;
  currentUser: any

  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private _tokenService: Angular2TokenService,
    private alertCtrl: AlertController,
    private event: Events
  ) {

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

  showPage(page) {
    this.nav.setRoot(page.component);
  }

  showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Success',
    subTitle: 'Successful action',
    buttons: ['Ok']
  });
    alert.present();
  }

  registerAccountPopUp(){
    console.log('popup');
    let confirm = this.alertCtrl.create({
      title: 'Signup',
      inputs: [
        {
          name: 'email',
          placeholder: 'email'
        },
        {
          name: 'password',
          placeholder: 'password',
          type: 'password'
        },
        {
          name: 'passwordConformation',
          placeholder: 'password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Signup',
          handler: data => {
            this.register(data);
          }
        }
      ]
    });
    confirm.present();
  }

  register(credentials) {
    this._tokenService
      .registerAccount(credentials)
      .subscribe(
        res => {
          (this.currentUser = res.json().data)
          this.showAlert();
          this.event.publish('userSignedUp', this.currentUser);
          this.slides.slideTo(2, 500);        },
        err => console.error('error')
      );
  }

}
