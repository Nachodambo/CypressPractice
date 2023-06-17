/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class HomePage {
  // * Elements
  btnAcceptCookies = () => cy.getId("onetrust-accept-btn-handler");

  btnOW = () => cy.get(`[for="AvailabilitySearchInputSearchView_OneWay"]`);

  inputOrigin = () => cy.getId("AvailabilitySearchInputSearchView_TextBoxMarketOrigin1");
  inputDestination = () => cy.getId("AvailabilitySearchInputSearchView_TextBoxMarketDestination1");
  selectorLocation = (idCode) => cy.get(`[data-id-code="${idCode}"]`);

  // * Methods
  acceptCookies() {
    this.btnAcceptCookies().click();
  }

  selectOW() {
    cy.scrollTo("top");
    this.btnOW().click();
  }

  selectOrigin(origin) {
    this.inputOrigin().click();
    this.inputOrigin().clear().type(origin);
    this.selectorLocation(origin).click();
  }
  selectDestination(destination) {
    this.inputDestination().click();
    this.inputDestination().clear().type(destination);
    this.selectorLocation(destination).click();
  }
}
