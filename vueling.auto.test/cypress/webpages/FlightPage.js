/// <reference types='cypress-xpath' />
/// <reference types="cypress"/>

import "cypress-xpath/src/index";

export class FlightPage {
  //elementos

  departureFlightCompany = (companyType) => cy.get(`#outboundFlightCardsContainer [class*=vy-icon-${companyType}]:not(.hidden)`);
  flightCardsBody = () => cy.getId("outboundFlightCardsContainer");

  returnFlightCardsBody = () => cy.getId("inboundFlightCardsContainer");
  returnFlightCompany = (companyType) => cy.get(`#inboundFlightCardsContainer [class*=vy-icon-${companyType}]:not(.hidden)`);

  //funciones

  selectDepartureRandomFlight(companyType) {
    this.flightCardsBody().should("be.visible");
    let counter = 0;

    this.departureFlightCompany(companyType)
      .each(($element) => {
        counter++;
      })
      .then(() => {
        //cy.log(counter);
        const random = Math.floor(Math.random() * counter);
        this.departureFlightCompany(companyType).eq(random).click();
      });
  }
  selectReturnRandomFlight(companyType) {
    this.returnFlightCardsBody().should("be.visible");
    this.returnFlightCompany(companyType)
      .its("length")
      .then((length) => {
        cy.log(length);
        const random = Math.floor(Math.random() * length);
        this.returnFlightCompany(companyType).eq(random).click();
      });
  }
}
