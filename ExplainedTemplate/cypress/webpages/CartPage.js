/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class CartPage {
  //Elements
  tableBody = () => cy.get("#tbodyid"); //Here we locate the elements from the page
  btnPlaceOrder = () => cy.get(".btn-success");
  btnDeleteItem = () => cy.xpath(`//a[text()="Delete"]`);

  nameForm = () => cy.getId("name"); //by using the command cy.getID("idName") we can locate an element only using its id name.
  countryForm = () => cy.getId("country"); // cy.getId can be created in the commands.js file in the support folder
  cityForm = () => cy.getId("city");
  creditCardForm = () => cy.getId("card");
  monthForm = () => cy.getId("month");
  yearForm = () => cy.getId("year");
  btnPurchace = () => cy.get(`[onclick="purchaseOrder()"]`);

  iconPurchaseConfirmation = () => cy.get(`[class="sa-placeholder"]`);
  btnPurchaseConfirmation = () => cy.get(`.confirm.btn`);

  // Methods                            Here we will write methdos with the elements we got from the page

  placeOrder() {
    this.tableBody().should("not.be.empty");
    this.btnPlaceOrder().click();
  }

  fillCartForm() {
    //in this method, with the command cy.fixture("jsonfile") we get the data from the folder fixtures.
    //When filling the form we use the data of the json file that we store in dataForm contain in .then()
    //We access each field of the json by writing dataForm.nameOfField

    cy.fixture("fillForm").then((dataForm) => {
      const cartFormIndex = 0;
      this.nameForm().type(dataForm[cartFormIndex].name);
      this.countryForm().type(dataForm[cartFormIndex].country);
      this.cityForm().type(dataForm[cartFormIndex].city);
      this.creditCardForm().type(dataForm[cartFormIndex].creditCard);
      this.monthForm().type(dataForm[cartFormIndex].month);
      this.yearForm().type(dataForm[cartFormIndex].year);
      this.btnPurchace().should("be.visible"); //In cypress we can do asserts with should,
      this.btnPurchace().click(); //in this case we verify btnPurchace is visible
    });
  }

  verifyPurchaceConfirmation() {
    this.iconPurchaseConfirmation().should("be.visible"); //we berify that we have completed the puchese by success the icon
    this.btnPurchaseConfirmation().click();
  }
}
