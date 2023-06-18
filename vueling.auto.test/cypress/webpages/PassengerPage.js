import "cypress-xpath/src/index";

export class PassengerPage {
  //elementos
  passengerBox = {
    passengerPageTitle: () => cy.get(".booking-contact_title"),
    inputADTname: () => cy.getId("ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxFirstName_0"),
    inputADTlastName: () => cy.getId("ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxLastName_0"),
    inputINFname: () => cy.getId("ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxFirstName_0_0"),
    inputINFlastName: () => cy.getId("ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxLastName_0_0"),
    inputDOB_INF: () => cy.getId("birthDate1_1"),
    btnReady: () => cy.get("#paxLi1 .booking-contact_form_button"),
  };

  passengerBoxADT2 = {
    cardADT: () => cy.getId("paxLi2"),
    inputADTname: () => cy.getId("ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxFirstName_1"),
    inputADTlastName: () => cy.getId("ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxLastName_1"),
    btnReady: () => cy.get("#paxContent2 .booking-contact_form_button"),
  };

  contactPersonBox = {
    cardContactPerson: () => cy.getId("liContact"),
  };

  //funciones

  fillADTinfo() {
    this.passengerBox.passengerPageTitle().should("be.visible");
    this.passengerBox.inputADTname().type(cy.getRandomFirstName());
    this.passengerBox.inputADTlastName().type(cy.getRandomLastName());
  }
  fillINFinfo() {
    let year = new Date().getFullYear();
    this.passengerBox.inputINFname().type(cy.getRandomFirstName());
    this.passengerBox.inputINFlastName().type(cy.getRandomLastName());
    this.passengerBox.inputDOB_INF().type(`01/01/${year}`);
  }

  clickBtnReady() {
    this.passengerBox.btnReady().click();
  }
  fill2ndADTinfo() {
    this.passengerBoxADT2.cardADT().should("be.visible");
    this.passengerBoxADT2.inputADTname().type(cy.getRandomFirstName());
    this.passengerBoxADT2.inputADTlastName().type(cy.getRandomLastName());
    this.passengerBoxADT2.btnReady().click();
  }

  fillContactPersonInfo() {
    this.contactPersonBox.cardContactPerson().should("be.visible");
  }
}
