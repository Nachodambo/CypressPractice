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

  xit("TC0 - OW_BCN-ATH_2ADT1INF", () => {
    homePage.acceptCookies();
    homePage.selectFlightType(flghtDetails.OW);
    homePage.selectOrigin(flghtDetails.origin);
    homePage.selectDestination(flghtDetails.destination);
    homePage.selectMonthInCalendar(flghtDetails.month);
    homePage.pickFirstDayAvailable();
    homePage.selectADTamount(flghtDetails.ADTamount);
    homePage.selectINFamount(flghtDetails.INFamount);
    homePage.clickSearchFlight();
  });

  it("TC1 - RT_MAD-SVQ_4ADT2INF", () => {
    homePage.acceptCookies();
    homePage.selectFlightType(flghtDetails.RT);
    homePage.selectOrigin("MAD");
    homePage.selectDestination("SVQ");
    homePage.selectMonthInCalendar(flghtDetails.month);
    homePage.pickFirstDayAvailable();
    homePage.selectMonthInCalendar("octubre");
    homePage.pickDayFromCalendar(8);
    homePage.selectADTamount("4");
    homePage.selectINFamount("2");
    //homePage.clickSearchFlight();
  });

  after(() => {
    cy.log("Test has Finished");
  });

  afterEach(() => {
    //cy.screenshot(`Screenshot`);
  });
});
