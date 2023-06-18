/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class FlightPage {
  //elementos

  chooseFlightCompany = (companyType) => cy.get(`[class^=vy-icon-${companyType}]`);
  flightCardsBody = () => cy.getId("outboundFlightCardsContainer");

  //funciones

  selectRandomFlight(companyType) {
    this.flightCardsBody().should("be.visible");
    let counter = 0;

    this.chooseFlightCompany(companyType)
      .each(($element) => {
        counter++;
      })
      .then(() => {
        cy.log(counter);
        const random = Math.floor(Math.random() * counter);
        this.chooseFlightCompany(companyType).eq(random).click();
      });
  }
}
