/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class HomePage {
  // Elements
  btnAcceptCookies = () => cy.getId("onetrust-accept-btn-handler");

  btnOW = () => cy.get(`[for="AvailabilitySearchInputSearchView_OneWay"]`);

  inputOrigin = () => cy.getId("AvailabilitySearchInputSearchView_TextBoxMarketOrigin1");
  inputDestination = () => cy.getId("AvailabilitySearchInputSearchView_TextBoxMarketDestination1");
  selectorCity = (idCode) => cy.get(`[data-id-code="${idCode}"]`);

  monthTitleCalendar = () => cy.get(`.ui-datepicker-month`);
  btnNextCalendar = () => cy.get(`.ui-datepicker-next`);
  daysAvailable = () => cy.get(`[data-handler="selectDay"]`);

  ADTselector = (ADTnumber) => cy.get(`#adtSelectorContainer [value="${ADTnumber}"]`);
  INFselector = (INFnumber) =>
    cy.get(`#AvailabilitySearchInputSearchView_DropDownListPassengerType_INFANT [value="${INFnumber}"]`);

  // Functions

  acceptCookies() {
    this.btnAcceptCookies().click();
  }

  selectOW() {
    this.btnOW().click();
  }

  selectOrigin(origin) {
    this.inputOrigin().click();
    this.inputOrigin().clear().type(origin);
    this.selectorCity(origin).should("be.visible").click();
  }
  selectDestination(destination) {
    this.inputDestination().click();
    this.inputDestination().clear().type(destination);
    this.selectorCity(destination).should("be.visible");
    this.selectorCity(destination).click();
  }

  selectMonthInCalendar(month) {
    this.monthTitleCalendar().should("be.visible");

    this.monthTitleCalendar()
      .first()
      .invoke("text")
      .then((title) => {
        if (month !== title) {
          this.btnNextCalendar().click();
          return this.selectMonthInCalendar(month);
        }
      });
  }
  pickFirstDayAvailable() {
    this.daysAvailable().first().click();
  }

  selectADTamaunt(amaount) {
    this.ADTselector(amaount).click();
  }

  selectINFamaunt(amaunt) {
    this.INFselector(amaunt).click();
  }
}
