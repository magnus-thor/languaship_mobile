import { SignupPage} from "./signup";
// import {MyApp} from "../../app/app.component";
import {
  AlertController,
  IonicModule,
  IonicPageModule,
  LoadingController, NavController, NavParams,
  Platform,
  ViewController,
  Events,
  Config,
  App,
  Nav,
  Slides,
  DomController,
  Keyboard,
  Form,
  DeepLinker,
  Haptic,
  GestureController, GestureDelegate
} from "ionic-angular";
import {MockBackend} from "@angular/http/testing";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {inject, TestBed} from "@angular/core/testing";
import {
  AlertControllerMock,
  LoadingControllerMock,
  NavControllerMock,
  NavParamsMock,
  ViewControllerMock,
  EventsMock,
  ConfigMock,
  // PlatformMock,
} from "ionic-mocks";
import {BaseRequestOptions, Http} from "@angular/http";
import {Angular2TokenService} from "angular2-token";

import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';

describe('SignupPage', () => {
  let fixture, component, mockBackend, tokenService;

  let signInData = {
    email: 'test@test.com',
    password: 'password',
    userType: String
  };


  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        SignupPage
      ],
      imports: [
        IonicPageModule.forChild(SignupPage),
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
        {provide: ViewController, useFactory: () => ViewControllerMock.instance()},
        {provide: NavController, useFactory: () => NavControllerMock.instance()},
        {provide: NavParams, useFactory: () => NavParamsMock.instance()},
        {provide: Events, useFactory: () => EventsMock.instance()},
        {provide: Config, useFactory: () => ConfigMock.instance()},
        {provide: DeepLinker, useFactory: () => ConfigMock.instance()},
        Angular2TokenService, App, DomController, Keyboard, Form, Haptic, GestureController
      ]
    });

    fixture = TestBed.createComponent(SignupPage);
    component = fixture.componentInstance;
  });

  beforeEach(inject([Angular2TokenService, MockBackend], (_tokenService, _mockBackend) => {
    tokenService = _tokenService;
    mockBackend = _mockBackend;
  }));

  it('should create the page', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });


});
