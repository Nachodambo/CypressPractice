import { it } from "mocha";
import { HomePage } from "../webpages/HomePage";

describe("Search flights", () => {
  const homePage = new HomePage();
  let flghtDetails = {};

  beforeEach(() => {
    cy.visit("/");
    cy.fixture("data").then((info) => {
      flghtDetails = info;
    });
  });

  it("TC0 - OW_BCN-ATH_2ADT1INF", () => {
    homePage.acceptCookies();
    //homePage.btnAcceptCookies().screenshot("aceptar cookies");
    homePage.selectFlightType(flghtDetails.OW);
    //cy.screenshot(`Select OW`);
    homePage.selectOrigin(flghtDetails.origin);
    //cy.screenshot(`Select Origin ${flghtDetails.origin}`);
    homePage.selectDestination(flghtDetails.destination);
    //cy.screenshot(`Select Destination ${flghtDetails.destination}`);
    homePage.selectMonthInCalendar(flghtDetails.month);
    homePage.pickFirstDayAvailable();
    //cy.screenshot(`Select first avaliable day of August`);
    homePage.selectADTamount(flghtDetails.ADTamount);
    homePage.selectINFamount(flghtDetails.INFamount);
    //cy.screenshot(`Select ${flghtDetails.ADTamount} ADT ${flghtDetails.ADTamount} INF`);
    homePage.clickSearchFlight();
  });

  it("TC1 - RT_MAD-SQV_4ADT2INF", () => {
    homePage.acceptCookies();
    homePage.btnAcceptCookies().screenshot("aceptar cookies");
    homePage.selectFlightType(flghtDetails.RT);
  });

  after(() => {
    cy.log("Test has Finished");
  });

  afterEach(() => {
    cy.screenshot(`Screenshot`);
  });
});
