/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class HomePage {
  // Elements
  btnAcceptCookies = () => cy.getId("onetrust-accept-btn-handler");

  btnFlightType = (type) => cy.get(`[for="AvailabilitySearchInputSearchView_${type}"]`);

  inputOrigin = () => cy.getId("AvailabilitySearchInputSearchView_TextBoxMarketOrigin1");
  inputDestination = () => cy.getId("AvailabilitySearchInputSearchView_TextBoxMarketDestination1");
  selectorCity = (idCode) => cy.get(`[data-id-code="${idCode}"]`);

  monthTitleCalendar = () => cy.get(`.ui-datepicker-month`);
  btnNextCalendar = () => cy.get(`.ui-datepicker-next`);
  daysAvailable = () => cy.get(`[data-handler="selectDay"]`);

  dropdownADT = () => cy.getId("adtSelectorDropdown");
  ADTselector = (ADTnumber) => cy.get(`#adtSelectorContainer [value="${ADTnumber}"]`);

  dropdownINF = () => cy.getId(`AvailabilitySearchInputSearchView_DropDownListPassengerType_INFANT`);
  INFselector = (INFnumber) =>
    cy.get(`#AvailabilitySearchInputSearchView_DropDownListPassengerType_INFANT [value="${INFnumber}"]`);

  btnSearchFlight = () => cy.getId(`AvailabilitySearchInputSearchView_btnClickToSearchNormal`);

  // Functions

  acceptCookies() {
    this.btnAcceptCookies().click();
  }

  selectFlightType(type) {
    this.btnFlightType(type).click();
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
    this.monthTitleCalendar().first().should("have.text", month);
  }
  pickFirstDayAvailable() {
    this.daysAvailable().should("be.visible");
    this.daysAvailable().first().click();
  }

  selectADTamount(amount) {
    this.dropdownADT().select(amount, { force: true });
    this.ADTselector(amount).should("have.value", amount);
    this.ADTselector(amount).should("be.visible");
  }

  selectINFamount(amount) {
    this.dropdownINF().select(amount).should("have.value", amount);
    this.INFselector(amount).should("be.visible");
  }

  clickSearchFlight() {
    this.btnSearchFlight().click();
  }
}
