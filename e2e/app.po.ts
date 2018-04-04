import { browser, by, element } from 'protractor';
export class Page {
  navigateTo(destination) {
    return browser.get(destination);
  }
  getTitle() {
    return browser.getTitle();
  }
 getHomeTitleText() {
    return element(by.tagName('page-home')).element(by.tagName('ion-title')).getText();
  }
}
