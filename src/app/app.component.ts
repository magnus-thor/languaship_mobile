import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { LocationPage } from '../pages/location/location';
import { LoginPage } from '../pages/login/login';
import { ChatPage } from '../pages/chat/chat';
import { SettingsPage } from '../pages/settings/settings';
import { LanguagesPage } from '../pages/languages/languages';
import { Angular2TokenService } from 'angular2-token';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform:
    Platform, public statusBar:
    StatusBar, public splashScreen:
    SplashScreen,
    private _tokenService: Angular2TokenService
  ) {
    this._tokenService.init({
    apiBase: 'https://https://languaship.herokuapp.com/api/v1/user'
  });

    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Signup', component: SignupPage },
      { title: 'Languages', component: LanguagesPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Location', component: LocationPage },
      { title: 'Login', component: LoginPage },
      { title: 'Chat', component: ChatPage },
      { title: 'Settings', component: SettingsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);

  }
}
