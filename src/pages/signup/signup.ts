import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Angular2TokenService } from 'angular2-token';

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
  currentUser: any

  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private _tokenService: Angular2TokenService,
    private alertCtrl: AlertController
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

  openPage(page) {
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
            this.login(data)
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
        res => (this.currentUser = res.json().data),
        err => console.error('error')
      );
  }

  login(credentials) {
    this._tokenService
      .signIn(credentials)
      .subscribe(
        res => (this.currentUser = res.json().data),
        err => console.error('error')
      );
  }

}
