import { Page } from './app.po';
import {SignupPage} from "../src/pages/signup/signup";
describe('App', () => {
  let page: Page;
  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    xit('should have a title saying SignupPage', () => {
      page.getPageTitleText().then(title => {
        expect(title).toEqual('SIGN UP');
      });
    });
  });
});
