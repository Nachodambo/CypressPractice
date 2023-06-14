/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class SignupPage {
  // * Elements

  inputUsername = () => cy.getId(`sign-username`);
  inputPassword = () => cy.getId(`sign-password`);
  btnSignUp = () => cy.get(`[onclick="register()"]`);

  // * Methods
  registerUser() {
    const userInfoIndex = 1;
    this.inputUsername().clear().type(cy.getRandomString(8));
    this.inputPassword().clear().type(cy.getRandomString(8));
    this.btnSignUp().click();

    cy.on("window:alert", (str) => {
      //this is an assert for the alert og the console: "sign up successful"
      expect(str).to.equal(`Sign up successful.`);
    });
  }
}
