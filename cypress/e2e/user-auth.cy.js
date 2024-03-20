import HeaderPage from "../pages/HeaderPage";
import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import LoginPage from "../pages/LoginPage";
import { faker } from '@faker-js/faker';

const baseUrl = "https://qa-practice.netlify.app";

describe("authentication test suite", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("login test", () => {
    LeftSideMenuPage.getEcommerceMenuLink().click();
    LoginPage.doLogin('admin@admin.com', 'admin123');
    HeaderPage.getLogoutBtn().should("be.visible");
  });

    
  it("invalid login test", () => {
    const userCredentials = {
      "email": faker.internet.email(),
      "password": "wrongcreds"
    }
    LeftSideMenuPage.getEcommerceMenuLink().click();
    LoginPage.getEmail().type(userCredentials.email);
    LoginPage.getPsw().type(userCredentials.password);
    LoginPage.getLoginBtn().click();
    HeaderPage.getLogoutBtn().should("not.exist");
    LoginPage.getLoginErrorMsg().should('contain.text', `Bad credentials! Please try again! Make sure that you've registered.`);
  });
});
