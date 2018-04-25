import {TestBed, inject} from '@angular/core/testing';
import {Config, IonicPageModule, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Http, BaseRequestOptions, RequestMethod} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {Angular2TokenService} from "angular2-token";
import {AlertController, LoadingController, App, MenuController,
DomController, Keyboard} from 'ionic-angular';
import {AlertControllerMock, LoadingControllerMock, EventsMock,
  NavControllerMock, ConfigMock, MenuControllerMock} from 'ionic-mocks';
import {UsersProvider} from "../../providers/users/users";
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';
import {HomePage} from "./home";
import ENV from "../../providers/config";

describe ('HomePage', () => {
  let fixture, component, mockBackend, tokenService;

  let responseMock = {
    "data": [
        { "id": 1,
        "type": "users",
        "attributes": {
        "languages": [],
          "location": 'Stockholm',
          "name": "Magnus",
          "email": "magnus@test.com",
          "age": "42",
          "gender": "Male",
          "image": "none"
      }
    }]
  };

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        HomePage
      ],
      imports: [
        IonicPageModule.forChild(HomePage)
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
        {provide: NavController, useFactory: () => NavControllerMock.instance()},
        {provide: Event, useFactory: () => EventsMock.instance()},
        {provide: Config, useFactory: () => ConfigMock.instance()},
        {provide: MenuController, useFactory: () => MenuControllerMock.instance()},

        Angular2TokenService, UsersProvider, App, DomController, Keyboard
      ]
    });

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  beforeEach(inject([Angular2TokenService, MockBackend], (_tokenService, _mockBackend) => {
    _tokenService.init({
      apiBase: ENV.config('dev').apiBase
    });
    tokenService = _tokenService;
    mockBackend = _mockBackend;
  }));


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('ionViewDidLoad should get all users', () => {

    mockBackend.connections.subscribe(
      c => {
        expect(c.request.method).toEqual(RequestMethod.Post)
        c.mockRespond(new Response({
          body: (responseMock)
        }))
      });
    component.ionViewDidLoad();
    expect(component.users).toBe(responseMock)
  });

});
