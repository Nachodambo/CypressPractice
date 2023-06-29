import "cypress-xpath/src/index";

export class PassengerPage {
  //elements
  /*
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
  */

  passengerWithParameters = {
    inputADTName: (num) => cy.get(`#ADT${num} #ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxFirstName_${num - 1}`),
    cadrADT: (num) => cy.getId(`ADT${num}`),
    passengerPageTitle: () => cy.get(".booking-contact_title"),
    inputADTLastName: (num) => cy.get(`#ADT${num} #ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxLastName_${num - 1}`),
    inputINFname: (num) => cy.getId(`ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxFirstName_${num}_${num}`),
    inputINFlastName: (num) => cy.getId(`ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxLastName_${num}_${num}`),
    btnReady: (num) => cy.get(`#paxLi${num} .booking-contact_form_button`),
    inputDOB_INF: (num) => cy.getId(`birthDate${num}_${num}`),
  };

  contactPersonBox = {
    cardContactPerson: () => cy.getId("liContact"),
    inputName: () => cy.getId("ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_TextBoxFirstName"),
    inputLastName: () => cy.getId("ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_TextBoxLastName"),
    dropDownCountry: () => cy.getId("ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_DropDownListCountry"),
    inputPhone: () => cy.getId("ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_TextBoxHomePhone"),
    inputEmail: () => cy.getId("ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_TextBoxEmailAddress"),
  };

  checkboxAcceptPrivacy = () => cy.getId("checkboxAcceptsPrivPolLabel");
  btnSubmit = () => cy.getId("ContactViewControlGroupMainContact_BoxPassengerInformationView_LinkButtonSubmit");

  //functions
  /*
  fillADTinfo() {
    this.passengerBox.passengerPageTitle().should("be.visible");
    this.passengerBox.inputADTname().type(cy.getRandomFirstName());
    this.passengerBox.inputADTlastName().type(cy.getRandomLastName());
  }*/

  fillPassengersForms(ADTs, INFs) {
    this.passengerWithParameters.passengerPageTitle().should("be.visible");
    for (let i = 0; i < ADTs; i++) {
      this.passengerWithParameters.cadrADT(i + 1).should("be.visible");
      this.passengerWithParameters
        .inputADTName(i + 1)
        .clear()
        .type(cy.getRandomFirstName());
      this.passengerWithParameters
        .inputADTLastName(i + 1)
        .clear()
        .type(cy.getRandomLastName());
      if (INFs > 0) {
        let year = new Date().getFullYear(); //to get the actual year
        this.passengerWithParameters.inputINFname(i).clear().type(cy.getRandomFirstName());
        this.passengerWithParameters.inputINFlastName(i).clear().type(cy.getRandomLastName());
        this.passengerWithParameters
          .inputDOB_INF(i + 1)
          .clear()
          .type(`01/01/${year}`);
      }
      INFs -= 1;
      this.passengerWithParameters.btnReady(i + 1).click();
    }
  }

  /*
  fillINFinfo() {
    let year = new Date().getFullYear();
    this.passengerBox.inputINFname().clear().type(cy.getRandomFirstName());
    this.passengerBox.inputINFlastName().clear().type(cy.getRandomLastName());
    this.passengerBox.inputDOB_INF().clear().type(`01/01/${year}`);
  }
  */

  clickBtnReady() {
    this.passengerBox.btnReady().click();
  }
  /*
  fill2ndADTinfo() {
    this.passengerBoxADT2.cardADT().should("be.visible");
    this.passengerBoxADT2.inputADTname().type(cy.getRandomFirstName());
    this.passengerBoxADT2.inputADTlastName().type(cy.getRandomLastName());
    this.passengerBoxADT2.btnReady().click();
  }
  */

  fillContactPersonInfo(country) {
    this.contactPersonBox.cardContactPerson().should("be.visible");
    this.contactPersonBox.inputName().clear().type(cy.getRandomFirstName());
    this.contactPersonBox.inputLastName().clear().type(cy.getRandomLastName());
    this.contactPersonBox.dropDownCountry().select(country);
    this.contactPersonBox.dropDownCountry().should("have.value", country);
    this.contactPersonBox.inputPhone().clear().type(cy.getRandomNumber());
    this.contactPersonBox
      .inputEmail()
      .clear()
      .type(cy.getRandomString(6) + "@gmail.com");
  }

  acceptPolicyandContinue() {
    this.checkboxAcceptPrivacy().should("be.visible").click();
    this.btnSubmit().click();
  }
}
