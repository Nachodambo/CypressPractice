import { it } from "mocha";
import { HomePage } from "../webpages/HomePage";
import { SignupPage } from "../webpages/SignupPage";
import { LoginPage } from "../webpages/LoginPage";

describe("Verify User Account Functionalities ", () => {
  const homePage = new HomePage();
  const signupPage = new SignupPage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit("/");
  });

  it("TC0 - Register Function", () => {
    homePage.clickSignup();
    signupPage.registerUser();
  });

  it("TC1 - Login Function", () => {
    homePage.clickLogin();
    loginPage.login();
    homePage.verifyUserLogedIn();
  });
});
