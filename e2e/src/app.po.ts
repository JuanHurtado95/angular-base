import { browser, by, element, ElementFinder, ExpectedConditions, ProtractorExpectedConditions } from 'protractor';

export class AppPage {

  until: ProtractorExpectedConditions;

  constructor(){
    this.until = ExpectedConditions;
  }

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  async esperarElementoAparezca(element: ElementFinder): Promise<void> {
    const id = await element.getId();
      await browser.wait(
      this.until.presenceOf(element),
      50000,
      `El elemento ${id} esta tardando mucho en aparecer en el DOM`
    );
  }
}
