import { Page } from './app.po';
import { SignupPage }  from "../src/pages/signup/signup";
import { browser } from "protractor";

describe('App', () => {
  let page: Page;
  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      // browser.get('');
      page.navigateTo('/');
    });

    it('should have a title saying SignupPage', () => {
      page.getPageTitleText().then(title => {
        debugger;
        expect(title).toEqual('SIGN UP');
      });
    });

    it('should have a title', () => {
      page.getTitle().then(title => expect(title).toEqual('LanguaShip'));
    });
  });
});
