import "cypress-xpath/src/index";

export class FarePage {
  //elementos
  fareTypeBox = () => cy.getId("faresList");
  fareType = (type) => cy.getId(`${type}FareBox`);
  btnContinue = () => cy.getId("stvContinueButton");

  //funciones
  chooseFareType(type) {
    this.fareTypeBox().should("be.visible");
    this.fareTypeBox().should("not.be.empty");
    this.fareType(type).click();
    this.btnContinue().click();
  }
}
