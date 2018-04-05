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
import { EditPage } from '../pages/edit/edit';
import { LanguagesPage } from '../pages/languages/languages';

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
    SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Signup', component: SignupPage },
      { title: 'Languages', component: LanguagesPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Location', component: LocationPage },
      { title: 'Login', component: LoginPage },
      { title: 'Chat', component: ChatPage },
      { title: 'Edit', component: EditPage }
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
