import { it } from "mocha";
import { HomePage } from "../webpages/HomePage";
import { FlightPage } from "../webpages/FlightPage";
import { FarePage } from "../webpages/FarePage";
import { PassengerPage } from "../webpages/PassengerPage";

describe("Search flights", () => {
  const homePage = new HomePage();
  const flightPage = new FlightPage();
  const farePage = new FarePage();
  const passengerPage = new PassengerPage();

  let flghtDetails = {};

  before(() => {
    cy.fixture("data").then((info) => {
      flghtDetails = info;
    });
  });

  beforeEach(() => {
    // Cypress.on("uncaught:exception", (err, runnable) => {
    //   return false;
    // });
    cy.visit("/");
  });

  it("TC0 - OW_BCN-MAD_2ADT1INF", () => {
    homePage.acceptCookies();
    homePage.selectFlightType(flghtDetails.OW);
    homePage.selectOrigin(flghtDetails.origin);
    homePage.selectDestination(flghtDetails.destination);
    homePage.selectMonthInCalendar(flghtDetails.month);
    homePage.pickFirstDayAvailable();
    homePage.selectADTamount(flghtDetails.ADTamount);
    homePage.selectINFamount(flghtDetails.INFamount);
    homePage.clickSearchFlight();
    flightPage.selectRandomFlight(flghtDetails.flightCompany);
    farePage.chooseFareType(flghtDetails.fareType);
    passengerPage.fillADTinfo();
    passengerPage.fillINFinfo();
    passengerPage.clickBtnReady();
    passengerPage.fill2ndADTinfo();
    passengerPage.fillContactPersonInfo();
  });

  xit("TC1 - RT_MAD-SVQ_4ADT2INF", () => {
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
    homePage.clickSearchFlight();
  });

  after(() => {
    cy.log("Test has Finished");
  });

  afterEach(() => {
    //cy.screenshot(`Screenshot`);
  });
});
