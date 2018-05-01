import { Page } from './app.po';
import { SignupPage }  from "../src/pages/signup/signup";
import { browser, element, by } from "protractor";

describe('App', () => {
  let page: Page;
  // let signupPage: SignupPage;

  beforeEach(() => {
    page = new Page();
    // signupPage = new SignupPage();

  });

  describe('default screen', () => {
    beforeEach(() => {
      // browser.get('');
      page.navigateTo('/');
    });

    it('App should have a title', () => {
      page.getTitle().then(title => expect(title).toEqual('LanguaShip'));
    });

    it('Page should have a title saying SignupPage', () => {
      page.getPageTitleText().then(title => {
        expect(title).toEqual('SIGN UP');
      });
    });

    it('should have {nav}', () => {
      element(by.css('ion-navbar')).isPresent().then(present => expect(present).toEqual(true));
    });

    it('user signs up', () => {
      element(by.buttonText('SIGN UP')).click()
        .then(() => {
          browser.driver.sleep(2000); // wait for the animation
          element.all(by.css('.toolbar-title')).first().getText().then(text => expect(text).toEqual('Pages'));
        });
    });

  });
});
