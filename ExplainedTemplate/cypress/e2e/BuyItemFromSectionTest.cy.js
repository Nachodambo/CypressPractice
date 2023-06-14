import { it } from "mocha";
import { HomePage } from "../webpages/HomePage"; //! Webpage Import to be able to create instances of the objects we need for the test
import { PhonePage } from "../webpages/PhonePage";
import { ItemPage } from "../webpages/ItemPage";
import { CartPage } from "../webpages/CartPage";
import { MonitorPage } from "../webpages/MonitorPage";

describe("BuyItemFromSectionTest", () => {
  //here we describe the test, we indicate we want to buy an item from a category

  //elements

  //Here we create instances of the object we will use to run the test
  const homePage = new HomePage();
  const phonePage = new PhonePage();
  const itemPage = new ItemPage();
  const cartPage = new CartPage();
  const monitorPage = new MonitorPage();

  //In beforeEach we add commands to execute before every test,
  // in this case we open the baseUrl before each test
  beforeEach(() => {
    cy.visit("/");
  });

  //Each it is an independent Test, if we write xit instead, the test will not be executed
  //In this test, we select a phone from its section and buy it
  it("TC0 - Buy random phone", () => {
    homePage.goToSection(homePage.phoneSection());
    phonePage.selectRandomPhone();
    itemPage.clickAddToCart();
    itemPage.goToCart();
    cartPage.placeOrder();
    cartPage.fillCartForm();
    cartPage.verifyPurchaceConfirmation();
  });

  it("TC1 - Buy random monitor", () => {
    homePage.goToSection(homePage.monitorSection());
    monitorPage.selectRandomMonitor();
    itemPage.clickAddToCart();
    itemPage.goToCart();
    cartPage.placeOrder();
    cartPage.fillCartForm();
    cartPage.verifyPurchaceConfirmation();
  });

  after(() => {
    // This will be executed only once after and for all the tests
    cy.log("Test has Finished");
  });

  afterEach(() => {
    // This will be executed after the execution of every test
    cy.screenshot(`Screenshot`); //! This will save a screenshot into the screenshots folder
  });
});
