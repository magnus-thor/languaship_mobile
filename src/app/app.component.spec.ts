import {TestBed, async, inject} from '@angular/core/testing';
import {IonicModule, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Http, BaseRequestOptions, RequestMethod} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {Angular2TokenService} from "angular2-token";
import {AlertController, LoadingController} from 'ionic-angular';
import {AlertControllerMock, LoadingControllerMock} from 'ionic-mocks';

import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../test-config/mocks-ionic';
import {MyApp} from './app.component';
import {SignupPage} from "../pages/signup/signup";

describe('AppComponent', () => {
  let fixture, component;

  let signInData = {
    email: 'test@test.com',
    password: 'password',
    userType: String
  };

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        MyApp
      ],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend, defaultOptions) => {
            return new Http(backend, defaultOptions)
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        {provide: Platform, useClass: PlatformMock},
        {provide: StatusBar, useClass: StatusBarMock},
        {provide: SplashScreen, useClass: SplashScreenMock},
        {provide: AlertController, useFactory: () => AlertControllerMock.instance()},
        {provide: LoadingController, useFactory: () => LoadingControllerMock.instance()},
        Angular2TokenService
      ]
    });

    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('initialises with a root page of SignupPage', () => {
    expect(component['rootPage']).toBe(SignupPage);
  });

  it('should have two pages', () => {
    expect(component.pages.length).toBe(4);
  });

  it('login method', inject([Angular2TokenService, MockBackend], (tokenService, mockBackend) => {

    mockBackend.connections.subscribe(
      c => {
        expect(c.request.getBody()).toEqual(JSON.stringify(signInData));
        expect(c.request.method).toEqual(RequestMethod.Post);
        expect(c.request.url).toEqual('/auth/sign_in');
      }
    );

    component.login(signInData);
  }));

  it('signOut method', inject([Angular2TokenService, MockBackend], (tokenService, mockBackend) => {

    mockBackend.connections.subscribe(
      c => {
        expect(c.request.method).toEqual(RequestMethod.Delete);
        expect(c.request.url).toEqual('/auth/sign_out');
      }
    );

    component.logout();
  }));

  it('loginPopUp should call alert create', inject([Angular2TokenService, MockBackend, AlertController], (tokenService, mockBackend, alertCtrl) => {

    component.loginPopUp();

    expect(alertCtrl.create).toHaveBeenCalled();
  }));

  it('presentLoading should call loading controller', inject([Angular2TokenService, MockBackend, LoadingController], (tokenService, mockBackend, loader) => {

    component.presentLoading();

    expect(loader.create).toHaveBeenCalled();
  }));

});
