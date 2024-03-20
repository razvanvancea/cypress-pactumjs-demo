/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import LeftSideMenuPage from "../pages/LeftSideMenuPage";

describe("API handling test suite", () => {
  it("api test", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/comments").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });

  it("mock api response", () => {
    cy.intercept(
      {
        method: "GET",
        url: "/comments",
      },
      {
        body: [
          {
            postId: 1,
            id: 1,
            name: "Razvan 4mayo",
            email: "iamqarv@gmail.com",
            body: "something short",
          },
        ],
      }
    ).as("mock-comments-api");

    cy.visit("https://qa-practice.netlify.app");
    LeftSideMenuPage.getInterceptAPIRequest().click();
    cy.wait("@mock-comments-api").its("response.statusCode").should("eq", 200);
  });

  it("wait for API", () => {
    const newPostTitle = faker.lorem.word(12);

    cy.intercept({
      method: "GET",
      url: "/comments",
    }).as("get-comments-api");

    cy.visit("https://qa-practice.netlify.app");
    LeftSideMenuPage.getInterceptAPIRequest().click(); // trigger for GET interceptor
    cy.wait("@get-comments-api").its("response.statusCode").should("eq", 200);
    cy.get("#postTitleInput").type(newPostTitle);

    cy.intercept({
      method: "POST",
      url: "/posts",
    }).as("create-post-api");

    cy.get("button").contains("CREATE post").click(); //trigger for POST interceptor
    cy.wait("@create-post-api").its("response.statusCode").should("eq", 201);
    cy.contains(
      `New ${newPostTitle} post CREATED. API Request sent. You can find it in DevTools (F12) > Network tab.`
    ).should("be.visible");
  });
});
