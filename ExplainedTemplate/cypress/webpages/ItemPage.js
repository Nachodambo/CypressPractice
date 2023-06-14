/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class ItemPage {
  // * Elements

  btnAddToCart = () => cy.get(".btn-success");
  btnCartPage = () => cy.get("#cartur");

  // * Methods
  clickAddToCart() {
    this.btnAddToCart().should("be.visible");
    this.btnAddToCart().click();
  }
  goToCart() {
    this.btnCartPage().click();
  }
}
