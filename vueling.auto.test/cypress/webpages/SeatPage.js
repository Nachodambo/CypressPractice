/// <reference types="cypress"/>

import "cypress-xpath/src/index";

export class SeatPage {
  //elementos
  subHeatherSeatPage = () => cy.getId("subHeaderSeatPage");
  seat1_0_2A = () => cy.getId("seat_1_0_2A");

  //funciones
  clickSeat() {
    this.subHeatherSeatPage().should("be.visible");
  }
}
/*cy.get('.asiento--spaceOne:not(.disabled):not(.ocupado):not(.vacio)');*/
