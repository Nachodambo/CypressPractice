import { it } from "mocha";
import { HomePage } from "../webpages/HomePage";

describe("Search flights", () => {
  const homePage = new HomePage();
  let dataSearch = {};

  beforeEach(() => {
    cy.visit("/");
    cy.fixture("data").then((info) => {
      dataSearch = info;
    });
  });

  it("TC0 - OW_BCN-ATH_2ADT1INF", () => {
    homePage.acceptCookies();
    homePage.selectOW();
    homePage.selectOrigin(dataSearch.origin);
    homePage.selectDestination(dataSearch.destination);
    homePage.selectMonthInCalendar(dataSearch.month);
    homePage.pickFirstDayAvailable();
    homePage.selectADTamount(dataSearch.ADTamount);
    homePage.selectINFamount(dataSearch.INFamount);
  });

  after(() => {
    cy.log("Test has Finished");
  });

  afterEach(() => {
    //cy.screenshot(`Screenshot`);
  });
});
