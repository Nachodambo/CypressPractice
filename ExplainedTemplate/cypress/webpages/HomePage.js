/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class HomePage {
  // * Elements
  btnSignup = () => cy.getId(`signin2`);
  btnLogin = () => cy.getId(`login2`);
  btnLogout = () => cy.getId(`logout2`);

  welcomeLoginSign = () => cy.getId("nameofuser");

  phoneSection = () => cy.get(`[onclick="byCat('phone')"]`); //We locate the section buttons
  monitorSection = () => cy.get(`[onclick="byCat('monitor')"]`);

  // * Methods

  goToSection(section) {
    //We create a function to go to a section passed by parameter
    section.click();
  }

  clickLogin() {
    this.btnLogin().should("exist").and("be.visible").click(); //we verify the login button exist and is visible
  }
  clickSignup() {
    this.btnSignup().should("exist").and("be.visible").click(); //we verify the login button exist and is visible
  }

  verifyUserLogedIn() {
    this.welcomeLoginSign().should("be.visible");
    this.btnLogout().should("be.visible");
    /*
    const dataForm = cy.fixture("fillCartForm");
    this.welcomeLoginSign()
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Welcome " + dataForm[1].userName);
      });
      */
  }
}
