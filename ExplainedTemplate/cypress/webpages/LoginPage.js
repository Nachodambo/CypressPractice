/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class LoginPage {
  // * Elements

  inputUsername = () => cy.getId(`loginusername`);
  inputPassword = () => cy.getId(`loginpassword`);
  btnSignUp = () => cy.get(`[onclick="logIn()"]`);

  // * Methods
  login() {
    cy.fixture("fillForm").then((jsonData) => {
      // we take information from fillForm file from fixtures folder
      const userInfoIndex = 1;

      this.inputUsername()
        .clear()
        .type(jsonData[1].userName, { force: true })
        .should("have.value", jsonData[1].userName); // assert to check if userName was written correctly
      this.inputPassword().clear().type(jsonData[1].password);
      this.btnSignUp().click();
    });
  }
}
