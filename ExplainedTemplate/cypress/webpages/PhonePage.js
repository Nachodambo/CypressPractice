/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class PhonePage {
  // * Elements

  getPhones = () => cy.get("[class='hrefch']");

  // * Methods
  selectRandomPhone() {
    let number = Math.floor(Math.random() * 6);
    this.getPhones().eq(number).click();
  }
}
